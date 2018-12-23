import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Api } from './api';

@Injectable({
  providedIn: 'root'
})
export class ApiBuilderService {

  constructor(private http: HttpClient) { }

  build(config: any) {
    return new Api(this.http, config);
  }
}
