import { Injectable,Inject } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import {HttpClient} from "../shared/http-client";

import {AppConfig,APP_CONFIG} from "../app.config";

export interface AbstractSampleService {

    getTodolist():Promise<any> ;

}

@Injectable()
export class SampleService implements AbstractSampleService {

    constructor(private httpClient:HttpClient,
                @Inject(APP_CONFIG) private config:AppConfig) {
    }

    getTodolist():Promise<any> {
        const url = `${this.config.apiEndpoint}/api/todolist`;
        return this.httpClient.get(url);
    }

}


