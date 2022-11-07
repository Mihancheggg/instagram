import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Address } from '../parent.component'

export interface Grades {
    math: number
    physics: number
}

@Component({
    selector: 'inst-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.css'],
})
export class ChildComponent {
    name = 'Victor'

    @Input() surnameProps?: string
    @Input() addressProps?: Address
    @Output() sendGradeEvent = new EventEmitter<Grades>()

    constructor() {}

    sendGradeHandler() {
        let math = 5
        let physics = 4
        this.sendGradeEvent.emit({ math, physics })
    }
}
