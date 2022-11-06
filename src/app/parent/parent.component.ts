import { Component } from '@angular/core'

export interface Address {
    city: string
    street: string
    house: number
}

@Component({
    selector: 'inst-parent',
    templateUrl: './parent.component.html',
    styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
    name = 'Ivan'

    surname = 'Petrov'

    address: Address = {
        city: 'Moscow',
        street: 'Lenina',
        house: 15,
    }

    constructor() {}
}
