import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-test2',
    templateUrl: './test2.component.html',
    styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

    button_name = 'Button'

    text = ''

    isAppLoading = true

    constructor() {
        setTimeout(
            ()=>{ this.isAppLoading = false },3000
        )
    }

    ngOnInit(): void {
    }

    changeButtonNameHandler() {
        this.button_name = 'New button'
    }

    changeTextHandler(event: Event) {
        this.text = (event.currentTarget as HTMLInputElement).value
    }
}
