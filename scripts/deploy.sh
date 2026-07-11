#!/usr/bin/env bash

set -euo pipefail

ROOT_DIR="."
BUILD_DIR="$ROOT_DIR/dist/personal-website/browser"
DEPLOY_DIR="../CarmeloCoy.github.io/"
VERSION="$(node -p "require('$ROOT_DIR/package.json').version")"
CURRENT_BRANCH="$(git branch --show-current)"

# Only allowed to deploy from the main branch
if [[ "$CURRENT_BRANCH" != "develop" ]]; then
    printf 'Deployment can only be done from the main branch: %s\n' "$CURRENT_BRANCH" >&2
    exit 1
fi 

if [[ -n "$(git -C "$DEPLOY_DIR" status --porcelain)" ]]; then
    printf 'Deployment repository has uncommitted changes: %s\n' "$DEPLOY_DIR" >&2
    exit 1
fi

if git -C "$DEPLOY_DIR" rev-parse --verify --quiet "refs/tags/$VERSION" >/dev/null; then
    printf 'Tag already exists: %s\n' "$VERSION" >&2
    exit 1
fi

if git -C "$DEPLOY_DIR" ls-remote --exit-code --tags origin "refs/tags/$VERSION" >/dev/null 2>&1; then
    printf 'Remote tag already exists: %s\n' "$VERSION" >&2
    exit 1
fi

npm run build
mv $BUILD_DIR/en-US/* "$BUILD_DIR/"
mv $BUILD_DIR/es-ES/ "$BUILD_DIR/es/"

rsync --archive --delete --exclude=.git/ "$BUILD_DIR/" "$DEPLOY_DIR/"

git -C "$DEPLOY_DIR" add --all

if git -C "$DEPLOY_DIR" diff --cached --quiet; then
    printf 'No deployment changes to commit.\n'
    exit 0
fi

git -C "$DEPLOY_DIR" commit -m "chore: deploy $VERSION"
git -C "$DEPLOY_DIR" tag "$VERSION"
git -C "$DEPLOY_DIR" push --tags
