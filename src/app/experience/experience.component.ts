import { Component, ChangeDetectionStrategy, WritableSignal, Signal, computed, signal } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-experience',
    imports: [DatePipe],
    templateUrl: './experience.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './experience.component.css',
})
export class ExperienceComponent {
    showTimeLineLong: WritableSignal<boolean> = signal(false);
    timelineItems = [
        {
            title: $localize`:@@experience.education.title:Science Secondary Education`,
            company: $localize`:@@experience.education.location:I.E.S. El Bohio, Cartagena, Spain`,
            duration: [new Date(2012, 8, 1), new Date(2014, 5, 1)],
            description: $localize`:@@experience.education.description:Completed secondary education at I.E.S. El Bohio in Cartagena.`,
            showOnShortTimeline: false,
        },
        {
            title: $localize`:@@experience.dual-degree.title:Dual Degree in Computer Engineering and Mathematics`,
            company: $localize`:@@experience.dual-degree.location:University of Murcia, Murcia, Spain`,
            duration: [new Date(2014, 8, 1), undefined],
            description: $localize`:@@experience.dual-degree.description:Studied a five-year double degree in Computer Engineering and Mathematics, motivated by my passion for mathematics, the incessant growth of computer science in everyday world, and my condition of good student, I decided to do this Double Degree whose curriculum is 5 years.`,
            showOnShortTimeline: true,
        },
        {
            title: $localize`:@@experience.repsol-internship.title:Internship at Repsol`,
            company: $localize`:@@experience.repsol-internship.location:Repsol S.A., Cartagena, Spain`,
            duration: [new Date(2017, 6, 1), new Date(2017, 7, 1)],
            description: $localize`:@@experience.repsol-internship.description:Supported IT infrastructure, server setup, systems integration, and software deployment tasks during an internship at Repsol.`,
            showOnShortTimeline: false,
        },
        {
            title: $localize`:@@experience.computer-engineering-degree.title:Degree in Computer Engineering`,
            company: $localize`:@@experience.computer-engineering-degree.location:University of Murcia, Murcia, Spain`,
            duration: [new Date(2019, 6, 1), undefined],
            description: $localize`:@@experience.computer-engineering-degree.description:In this year, I finished all the subjects related to the Engineering part Engineering. I was able to obtain my degree in this discipline.`,
            showOnShortTimeline: false,
        },
        {
            title: $localize`:@@experience.capgemini-junior-engineer.title:Junior Software Engineer`,
            company: $localize`:@@experience.capgemini-junior-engineer.location:Capgemini, Murcia, Spain`,
            duration: [new Date(2019, 8, 1), undefined],
            description: $localize`:@@experience.capgemini-junior-engineer.description:Worked on client-facing software development projects using Java and C/C++ within enterprise delivery processes.`,
            showOnShortTimeline: false,
        },
        {
            title: $localize`:@@experience.mathematics-degree.title:Degree in Mathematics`,
            company: $localize`:@@experience.mathematics-degree.location:University of Murcia, Murcia, Spain`,
            duration: [new Date(2020, 2, 1), undefined],
            description: $localize`:@@experience.mathematics-degree.description:In this year, I finished all the subjects related to the Mathematics part. I was able to obtain my second degree.`,
            showOnShortTimeline: false,
        },
        {
            title: $localize`:@@experience.capgemini-engineer.title:Software Engineer`,
            company: $localize`:@@experience.capgemini-engineer.location:Capgemini, Murcia, Spain`,
            duration: [new Date(2020, 7, 1), new Date(2020, 11, 1)],
            description: $localize`:@@experience.capgemini-engineer.description:Contributed to software development and technical design for an insurance-sector client following the company's engineering methodologies.`,
            showOnShortTimeline: false,
        },
        {
            title: $localize`:@@experience.nommon-engineer.title:Software Engineer`,
            company: $localize`:@@experience.nommon-engineer.location:Nommon Solutions and Technologies, Madrid, Spain`,
            duration: [new Date(2021, 0, 1), new Date(2022, 0, 1)],
            description: $localize`:@@experience.nommon-engineer.description:Started a new chapter in Madrid, developing web applications and contributing to analytical and visualization projects.`,
            showOnShortTimeline: true,
        },
        {
            title: $localize`:@@experience.nommon-senior-engineer.title:Senior Software Engineer`,
            company: $localize`:@@experience.nommon-senior-engineer.location:Nommon Solutions and Technologies, Madrid, Spain`,
            duration: [new Date(2022, 0, 1), new Date(2023, 11, 1)],
            description: $localize`:@@experience.nommon-senior-engineer.description:Led technical design, software architecture, and delivery work while supporting project teams and engineering initiatives.`,
            showOnShortTimeline: true,
        },
        {
            title: $localize`:@@experience.nommon-platform-engineer.title:Platform Engineer`,
            company: $localize`:@@experience.nommon-platform-engineer.location:Nommon Solutions and Technologies, Madrid, Spain`,
            duration: [new Date(2024, 0, 1), undefined],
            description: $localize`:@@experience.nommon-platform-engineer.description:Designs and operates cloud-based platforms, automates infrastructure, and enables development teams through platform engineering practices.`,
            showOnShortTimeline: true,
        },
    ];

    toggleTimeLine(): void {
        this.showTimeLineLong.update((value) => !value);
    }

    timeline: Signal<any> = computed(() =>
        this.showTimeLineLong() ? this.timelineItems : this.timelineItems.filter((item) => item.showOnShortTimeline),
    );
}
