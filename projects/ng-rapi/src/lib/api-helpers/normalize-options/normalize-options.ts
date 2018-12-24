import { HttpHeaders } from '@angular/common/http';
import { normalizeParams } from '../normalize-params/normalize-params';

export function normalizeOptions(options: any = {}) {
  return {
    ...options,
    params: normalizeParams(options.params),
    headers: new HttpHeaders(options.headers)
  };
}
