import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

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

  private reduceRequest(transformers = [], requestData) {
    return transformers.reduce((transformedRequest, transformer) => {
      transformedRequest = transformer(transformedRequest);
      return transformedRequest;
    }, requestData);
  }

  // @TODO: create tests
  private prepareOptions(options) {
    return {
      ...options,
      params: new HttpParams(options.params),
      headers: new HttpHeaders(options.headers)
    };
  }

  // TODO: create tests
  private transformRequest(request: { body?: any, options?: any}) {
    const preparedRequest = {
      body: request.body,
      options: this.prepareOptions(request.options),
    };
    return this.reduceRequest(this.config.transformers, preparedRequest);
  }

  private getUrl(path) {
    return `${this.baseUrl}${path}`;
  }

  public get(path, options): Observable<any> {
    const url = this.getUrl(path);
    const preparedRequest = this.transformRequest({ options });
    return this.http.get(url, preparedRequest.options);
  }

  public post(path, body, options): Observable<any> {
    const url = this.getUrl(path);
    const preparedRequest = this.transformRequest({ body, options });
    return this.http.post(url, preparedRequest.body, preparedRequest.options);
  }

  public put(path, body, options): Observable<any> {
    const url = this.getUrl(path);
    const preparedRequest = this.transformRequest({ body, options });
    return this.http.put(url, preparedRequest.body, preparedRequest.options);
  }

  public delete(path, options): Observable<any> {
    const url = this.getUrl(path);
    const preparedRequest = this.transformRequest({ options });
    return this.http.delete(url, preparedRequest.options);
  }
}
