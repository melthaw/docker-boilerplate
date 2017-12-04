import {NgModule} from '@angular/core';
import {FormsModule,ReactiveFormsModule}    from '@angular/forms'
import {HttpModule}    from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import {LocationStrategy,HashLocationStrategy} from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

import {SharedModule} from "rp-dynamic-form/components/common/shared";
import {DynamicFormModule} from "rp-dynamic-form/components/form/core/dynamic-form.module";
import {HttpClient} from "rp-dynamic-form/components/form/shared/http-client";

import {AppComponent} from "./app.component";
import {PageNotFoundComponent} from "./not-found.component";
import {DemoSampleModule} from "./demo/sample.module";
import {APP_CONFIG, NCB_APP_CONFIG} from "./app.config";
import {HttpClient} from "./shared/http-client";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        SharedModule,
        DynamicFormModule,
        DemoSampleModule,
    ],
    declarations: [
        AppComponent,
        PageNotFoundComponent
    ],
    providers: [
        {provide: APP_CONFIG, useValue: NCB_APP_CONFIG},
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        {provide: HttpClient, useClass: HttpClient}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}