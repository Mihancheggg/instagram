import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { Test1Component } from './test1/test1.component'
import { Test2Component } from './test2/test2.component'
import { Test3Component } from './test3/test3.component'
import { Test7Component } from './test7/test7.component'
import { FormsModule } from '@angular/forms'
import { ParentComponent } from './parent/parent.component'
import { ChildComponent } from './parent/child/child.component'
import { Test7childComponent } from './test7/test7child/test7child.component'

@NgModule({
    declarations: [
        AppComponent,
        Test1Component,
        Test2Component,
        Test3Component,
        Test7Component,
        ParentComponent,
        ChildComponent,
        Test7childComponent,
    ],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
