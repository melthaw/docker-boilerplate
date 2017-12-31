import { Injectable,Inject } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

/**
 * Please extends this to add authentication header
 */
@Injectable()
export class HttpClient {

    constructor(public http:Http) {
    }

    getHeaders():Headers {
        return new Headers({
            'Content-Type': 'application/json',
        });
    }

    get(url, options = {}):Promise<any> {
        return this.http.get(url, this.assignOptions(options))
            .toPromise()
            .then(response => this.parseResponse(response))
            .catch(this.handleError);
    }

    post(url, body, options = {}):Promise<any> {
        return this.http.post(url, body, this.assignOptions(options))
            .toPromise()
            .then(response => this.parseResponse(response))
            .catch(this.handleError);
    }

    put(url, body, options = {}):Promise<any> {
        return this.http.put(url, body, this.assignOptions(options))
            .toPromise()
            .then(response => this.parseResponse(response))
            .catch(this.handleError);
    }

    delete(url, options = {}):Promise<any> {
        return this.http.delete(url, this.assignOptions(options))
            .toPromise()
            .then(response => this.parseResponse(response))
            .catch(this.handleError);
    }

    assignOptions(options = {}):any {
        return Object.assign({},
            {
                withCredentials: true,
                headers: this.getHeaders()
            },
            options);
    }

    handleError(error:any):Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    parseResponse(response:any) {
        try {
            return response.json();
        }
        catch (err) {
            console.log('JSON:parse response body failed', response);
            return null;
        }
    }

}


