import {NgModule} from '@angular/core';
import {FormsModule,ReactiveFormsModule}    from '@angular/forms'
import {CommonModule} from '@angular/common';
import {HttpModule}    from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import {LocationStrategy,HashLocationStrategy} from '@angular/common';

import {DemoSampleComponent} from "./sample.component";
import {SampleService} from "./sample.service";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
        DemoSampleComponent,
    ],
    providers: [
        SampleService,
    ]
})
export class DemoSampleModule {
}