import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-experience',
    imports: [],
    templateUrl: './experience.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './experience.component.css',
})
export class ExperienceComponent {
    showTimeLineLong = false;

    toggleTimeLine(): void {
        this.showTimeLineLong = !this.showTimeLineLong;
    }
}
