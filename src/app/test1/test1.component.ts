import { Component } from '@angular/core'

interface IUser {
    age: number
    name: string
}

@Component({
    selector: 'inst-test1',
    templateUrl: '/test1.component.html',
    styleUrls: ['test1.component.css'],
})
export class Test1Component {
    testTitle = 'hey'

    user: IUser = {
        age: 32,
        name: 'Alex',
    }

    constructor() {}
}
