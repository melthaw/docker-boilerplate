import {Component,Inject,Injector,SimpleChanges,OnChanges,Output,Renderer,AfterViewChecked, ElementRef} from '@angular/core';
import {FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

import {APP_CONFIG} from "../app.config";
import {AppConfig} from "../app.config";
import {SampleService} from "./sample.service";

@Component({
    selector: 'ncb-sample',
    template: `
    <div>
        <p>Please click the button to manage TODO list.</p>
        <button type="button" (click)="loadList()">Load</button>
        <button type="button" (click)="clearList()">Clear</button>

        <div *ngIf="todolist != null && todolist.length>0">
            <ul *ngFor="let todoItem of todolist,let i=index" >
                <li>{{todoItem}}</li>
            </ul>
        </div>
    </div>
   `
})
export class DemoSampleComponent implements AfterViewChecked {

    constructor(@Inject(APP_CONFIG) private appConfig:AppConfig,
                private sampleService:SampleService) {

    }

    private todolist = [];

    ngOnInit() {

    }

    loadList() {
        this.sampleService
            .getTodolist()
            .then(result => this.todolist = result);
    }

    clearList() {
        this.todolist = [];
    }

    ngAfterViewChecked() {
    }

}