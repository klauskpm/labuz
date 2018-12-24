import { normalizeOptions } from './normalize-options';
import { HttpHeaders, HttpParams } from '@angular/common/http';

describe('api-helpers:prepareOptions', () => {
  it('should be defined', () => {
    expect(normalizeOptions).toBeDefined();
  });

  it('should return an empty normalized object when called without params', () => {
    const fakeOptions = {
      params: new HttpParams(),
      headers: new HttpHeaders()
    };
    const normalizedOptions = normalizeOptions();
    expect(normalizedOptions).toEqual(fakeOptions);
  });

  it('should return an empty normalized object when called with an empty object', () => {
    const fakeOptions = {
      params: new HttpParams(),
      headers: new HttpHeaders()
    };
    const normalizedOptions = normalizeOptions({});

    expect(normalizedOptions).toEqual(fakeOptions);
  });

  it('should call normalizeParams', function () {
    // TODO test only if the normalizeParams is called
  });

  it('should transform headers into HttpHeaders', () => {
    const options = {
      headers: {
        'Authentication': 'yes'
      }
    };
    const normalizedOptions = normalizeOptions(options);
    const newHeaders = new HttpHeaders(options.headers);

    expect(normalizedOptions.headers.keys()).toEqual(newHeaders.keys());
  });
});
