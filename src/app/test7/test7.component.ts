import { Component } from '@angular/core'

@Component({
    selector: 'inst-test7',
    templateUrl: './test7.component.html',
    styleUrls: ['./test7.component.css'],
})
export class Test7Component {
    grades: Array<string> = ['math: 5', 'english: 3']

    getGrade(grade: string) {
        this.grades.push(grade)
    }

    constructor() {}
}
