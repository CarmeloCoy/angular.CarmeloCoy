import { Component, inject, LOCALE_ID, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-nav-bar',
    imports: [],
    templateUrl: './nav-bar.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
    readonly languageFlagSrc = inject(LOCALE_ID).startsWith('es') ? '/GB.png' : '/ES.png';
    showNavbar = false;

    toggleNavbar(): void {
        this.showNavbar = !this.showNavbar;
    }
}
