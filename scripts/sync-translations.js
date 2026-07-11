const fs = require('fs');
const path = require('path');
const { XMLParser, XMLBuilder } = require('fast-xml-parser');

const localeDir = './src/locale';
const sourceFile = path.join(localeDir, 'messages.xlf');

const parser = new XMLParser({
    ignoreAttributes: false,
});

const builder = new XMLBuilder({
    ignoreAttributes: false,
    format: true,
});

const source = parser.parse(fs.readFileSync(sourceFile, 'utf8'));

const sourceUnits = source.xliff.file.body['trans-unit'];

const languages = ['es'];

languages.forEach((lang) => {
    const file = path.join(localeDir, `messages.${lang}.xlf`);

    const xml = parser.parse(fs.readFileSync(file, 'utf8'));

    const units = xml.xliff.file.body['trans-unit'];

    const map = new Map(units.map((unit) => [unit['@_id'], unit]));

    const newUnits = [];
    sourceUnits.forEach((sourceUnit) => {
        newUnits.push({
            '@_id': sourceUnit['@_id'],
            '@_datatype': sourceUnit['@_datatype'],
            source: sourceUnit.source,
            target: map.has(sourceUnit['@_id']) ? map.get(sourceUnit['@_id']).target : '',
            'context-group': sourceUnit['context-group'],
        });
    });

    xml.xliff.file.body['trans-unit'] = newUnits;
    fs.writeFileSync(file, builder.build(xml));
});
