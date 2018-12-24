import { HttpParams } from '@angular/common/http';

export function normalizeParams(params: HttpParams | {[p: string]: string}): HttpParams {
  if (!params) {
    return new HttpParams();
  }

  if (params instanceof HttpParams) {
    return params;
  }

  return Object.entries(params)
    .reduce((httpParams, entry) => {
      const [key, param] = entry;
      return httpParams.append(key, param.toString());
    }, new HttpParams());
}
