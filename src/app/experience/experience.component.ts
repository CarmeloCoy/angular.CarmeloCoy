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
            description: $localize`:@@experience.education.description:Studied Secondary Education at I.E.S. El Bohio.`,
            showOnShortTimeline: false,
        },
        {
            title: $localize`:@@experience.dual-degree.title:Dual Degree in Computer Engineering and Mathematics`,
            company: $localize`:@@experience.dual-degree.location:University of Murcia, Murcia, Spain`,
            duration: [new Date(2014, 8, 1), undefined],
            description: $localize`:@@experience.dual-degree.description:In 2014, I began my university studies at the University of Murcia, motivated by my passion for mathematics, the incessant growth of computer science in everyday world, and my condition of good student, I decided to do this Double Degree whose curriculum is 5 years.`,
            showOnShortTimeline: true,
        },
        {
            title: $localize`:@@experience.repsol-internship.title:Internship at Repsol`,
            company: $localize`:@@experience.repsol-internship.location:Repsol S.A., Cartagena, Spain`,
            duration: [new Date(2017, 6, 1), new Date(2017, 7, 1)],
            description: $localize`:@@experience.repsol-internship.description:During the summer of 2017, I made an internship in the IT team of Repsol's Cartagena factory. Support to IT infrastructures and systems support.`,
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
            description: $localize`:@@experience.capgemini-junior-engineer.description:My first step into the working world begins while I finish my studies. Software development for external clients using C/C++ and Java with client-side client methodologies.`,
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
            description: $localize`:@@experience.capgemini-engineer.description:From that date, I moved on from the programmer role to take on the role of Programmer-Analyst. I produced technical designs using the aforementioned technologies for a client in the insurance sector.`,
            showOnShortTimeline: false,
        },
        {
            title: $localize`:@@experience.nommon-engineer.title:Software Engineer`,
            company: $localize`:@@experience.nommon-engineer.location:Nommon Solutions and Technologies, Madrid, Spain`,
            duration: [new Date(2021, 0, 1), undefined],
            description: $localize`:@@experience.nommon-engineer.description:New year, new life. I began a new stage as a Software Engineer in a new company and a new city.`,
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
