import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Api} from './api';
import {NgRapiModule} from './ng-rapi.module';

@Injectable({
  providedIn: NgRapiModule
})
export class ApiBuilderService {

  constructor(private http: HttpClient) { }

  build(config: any) {
    return new Api(this.http, config);
  }
}
