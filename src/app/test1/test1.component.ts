import { Component, OnInit } from "@angular/core";

interface IUser {
    age: number
    name: string
}

@Component({
    selector: 'app-test1',
    templateUrl: '/test1.component.html',
    styleUrls: ['test1.component.css']
})

export class Test1Component implements OnInit {

    testTitle = 'hey'

    user: IUser = {
        age: 32,
        name: 'Alex'
    }

    constructor() {
    }

    ngOnInit(): void {
    }

}
