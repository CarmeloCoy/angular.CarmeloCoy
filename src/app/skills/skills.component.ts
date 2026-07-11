import { Component } from '@angular/core';

@Component({
    selector: 'app-skills',
    imports: [],
    templateUrl: './skills.component.html',
    styleUrl: './skills.component.css',
})
export class SkillsComponent {
    skills = [
        { title: $localize`:@@skills.algorithm:Algorithm`, value: 4 },
        { title: $localize`:@@skills.design-patterns:Design Patterns`, value: 4 },
        { title: `Testing`, value: 3 },
        { title: `Debugging`, value: 5 },
        { title: `C++`, value: 4 },
        { title: `Java 8`, value: 5 },
        { title: `Java EE`, value: 4 },
        { title: `Python`, value: 3 },
        { title: `HTML`, value: 3 },
        { title: `CSS`, value: 3 },
        { title: `JavaScript`, value: 3 },
        { title: `Flex CSS`, value: 3 },
        { title: `SQL`, value: 5 },
        { title: `NoSQL`, value: 2 },
        { title: $localize`:@@skills.web-service-rest:Web Service (REST)`, value: 3 },
        { title: `GraphQL`, value: 3 },
        { title: `LaTex`, value: 4 },
        { title: `Git`, value: 4 },
        { title: `Docker`, value: 3 },
        { title: `Scrum`, value: 3 },
    ];
}
