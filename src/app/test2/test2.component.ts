import { Component } from '@angular/core'

@Component({
    selector: 'inst-test2',
    templateUrl: './test2.component.html',
    styleUrls: ['./test2.component.css'],
})
export class Test2Component {
    button_name = 'Button'

    text = ''

    isAppLoading = true

    constructor() {
        setTimeout(() => {
            this.isAppLoading = false
        }, 3000)
    }

    changeButtonNameHandler() {
        this.button_name = 'New button'
    }

    changeTextHandler(event: Event) {
        this.text = (event.currentTarget as HTMLInputElement).value
    }
}
