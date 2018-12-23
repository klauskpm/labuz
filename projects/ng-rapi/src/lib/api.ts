import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { transformRequest } from './api-helpers';

export class Api {
  baseUrl: string;

  constructor(
    private http: HttpClient,
    private config: any
  ) {
    this.http = http;
    this.config = config;
    this.baseUrl = this.config.urls[this.config.environment];
  }

  private getUrl(path) {
    return `${this.baseUrl}${path}`;
  }

  public get(path, options): Observable<any> {
    const url = this.getUrl(path);
    const preparedRequest = transformRequest({ options });
    return this.http.get(url, preparedRequest.options);
  }

  public post(path, body, options): Observable<any> {
    const url = this.getUrl(path);
    const preparedRequest = transformRequest({ body, options });
    return this.http.post(url, preparedRequest.body, preparedRequest.options);
  }

  public put(path, body, options): Observable<any> {
    const url = this.getUrl(path);
    const preparedRequest = transformRequest({ body, options });
    return this.http.put(url, preparedRequest.body, preparedRequest.options);
  }

  public delete(path, options): Observable<any> {
    const url = this.getUrl(path);
    const preparedRequest = transformRequest({ options });
    return this.http.delete(url, preparedRequest.options);
  }
}
