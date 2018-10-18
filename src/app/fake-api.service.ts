import { Injectable } from '@angular/core';
import {ApiBuilderService, Api} from 'ng-rapi';


@Injectable({
  providedIn: 'root'
})
export class FakeApiService {
  private api: Api;

  constructor(
    private ab: ApiBuilderService
  ) {
    this.api = this.ab.build({
      urls: {
        foo: 'http://foo.com'
      },
      environment: 'foo'
    });
  }

  getPath() {
    return this.api.get('/path', {});
  }
}
