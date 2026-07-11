import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-skills',
    imports: [],
    templateUrl: './skills.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './skills.component.css',
})
export class SkillsComponent {
    skills = [
        { title: `Python`, value: 5 },
        { title: `Django`, value: 5 },
        { title: `Angular`, value: 4 },
        { title: `AWS`, value: 4 },
        { title: `Azure`, value: 3 },
        { title: `Terraform`, value: 4 },
        { title: `Docker`, value: 4 },
        { title: `Infrastructure as Code`, value: 5 },
        { title: `Software Architecture`, value: 5 },
        { title: `REST`, value: 4 },
        { title: `SQL`, value: 4 },
        { title: `Git`, value: 4 },
    ];
}
