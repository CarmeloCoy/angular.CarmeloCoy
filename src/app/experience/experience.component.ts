import { Component } from '@angular/core';

@Component({
    selector: 'app-experience',
    imports: [],
    templateUrl: './experience.component.html',
    styleUrl: './experience.component.css',
})
export class ExperienceComponent {
    showTimeLineLong = false;

    toggleTimeLine(): void {
        this.showTimeLineLong = !this.showTimeLineLong;
    }
}
