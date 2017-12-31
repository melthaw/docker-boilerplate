import { OpaqueToken } from '@angular/core';

const _apiEndpoint:string = '';

export interface AppConfig {
    apiEndpoint: string;
}

export const NCB_APP_CONFIG:AppConfig = {
    apiEndpoint: _apiEndpoint,
};

export let APP_CONFIG = new OpaqueToken('app.config');
