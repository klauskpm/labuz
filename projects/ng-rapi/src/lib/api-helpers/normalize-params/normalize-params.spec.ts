import {normalizeParams} from './normalize-params';
import {HttpParams} from '@angular/common/http';

describe('api-helpers:normalizeParams', () => {
  it('should be defined', () => {
    expect(normalizeParams).toBeDefined();
  });

  it('should return HttpParams when nothing is passed', () => {
    expect(normalizeParams(undefined)).toEqual(new HttpParams());
  });

  it('should just return the passed HttpParams', () => {
    const httpParams = new HttpParams().set('will', 'go');
    const differentHttpParams = new HttpParams();

    expect(normalizeParams(httpParams)).toEqual(httpParams);
    expect(normalizeParams).not.toEqual(differentHttpParams);
  });

  it('should transform an object into an HttpParams', () => {
    const params = {will: 'go'};
    const httpParams = new HttpParams().set('will', params.will);

    expect(normalizeParams(params).toString()).toEqual(httpParams.toString());
  });
});
