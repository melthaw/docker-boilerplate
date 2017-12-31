import {NgModule} from '@angular/core';
import {FormsModule,ReactiveFormsModule}    from '@angular/forms'
import {HttpModule}    from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import {LocationStrategy,HashLocationStrategy} from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

import {APP_CONFIG, NCB_APP_CONFIG} from "./app.config";
import {AppComponent} from "./app.component";
import {PageNotFoundComponent} from "./not-found.component";
import {HttpClient} from "./shared/http-client";

import {DemoSampleModule} from "./demo/sample.module";
import {DemoSampleComponent} from "./demo/sample.component";
import {SampleService} from "./demo/sample.service";

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
    ],
    declarations: [
        AppComponent,
        DemoSampleComponent,
        PageNotFoundComponent
    ],
    providers: [
        {provide: APP_CONFIG, useValue: NCB_APP_CONFIG},
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        HttpClient,
        SampleService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}