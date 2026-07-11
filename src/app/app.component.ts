import { Component } from '@angular/core';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { FooterComponent } from './footer/footer.component';

@Component({
    selector: 'app-root',
    imports: [NavBarComponent, AboutMeComponent, SkillsComponent, ExperienceComponent, FooterComponent],
    template: `
        <app-nav-bar></app-nav-bar>
        <app-about-me></app-about-me>
        <app-experience></app-experience>
        <app-skills></app-skills>
        <app-footer></app-footer>
    `,
    styles: ``,
})
export class AppComponent {}
