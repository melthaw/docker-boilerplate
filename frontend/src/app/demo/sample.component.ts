import {Component,Inject,Injector,SimpleChanges,OnChanges,Output,Renderer,AfterViewChecked, ElementRef} from '@angular/core';
import {FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

import {APP_CONFIG} from "../app.config";
import {AppConfig} from "../app.config";
import {SampleService} from "./sample.service";


@Component({
    selector: 'ncb-sample',
    template: `
    <div>
        <p>Please click the  <button type="button"
                label="Load"
                (click)="loadList()"
        ></button>  to load the TODO list.</p>

    </div>
   `
})
export class DemoSampleComponent implements AfterViewChecked {

    constructor(@Inject(APP_CONFIG) private appConfig:AppConfig,
                private sampleService:SampleService) {
        super();
    }

    data:Array = [];

    ngOnInit() {

    }

    loadList() {
        this.sampleService.getTodolist();
    }

    ngAfterViewChecked() {
    }

}