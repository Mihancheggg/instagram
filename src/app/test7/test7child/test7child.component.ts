import { Component, EventEmitter, Output } from '@angular/core'

@Component({
    selector: 'inst-test7child',
    templateUrl: './test7child.component.html',
    styleUrls: ['./test7child.component.css'],
})
export class Test7childComponent {
    inputGrade = ''

    @Output() sendGradeEvent = new EventEmitter<string>()

    constructor() {}

    sendGradeHandler() {
        this.sendGradeEvent.emit(this.inputGrade)
    }
}
