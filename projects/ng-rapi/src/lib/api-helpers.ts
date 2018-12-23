import { HttpHeaders, HttpParams } from '@angular/common/http';

export function reduceRequest(transformers = [], requestData) {
  return transformers.reduce((transformedRequest, transformer) => {
    transformedRequest = transformer(transformedRequest);
    return transformedRequest;
  }, requestData);
}

export function prepareOptions(options) {
  return {
    ...options,
    params: new HttpParams(options.params),
    headers: new HttpHeaders(options.headers)
  };
}

export function transformRequest(request: { body?: any, options?: any}) {
  const preparedRequest = {
    body: request.body,
    options: prepareOptions(request.options),
  };
  return reduceRequest(this.config.transformers, preparedRequest);
}
