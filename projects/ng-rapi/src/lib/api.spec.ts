import { TestBed, async } from '@angular/core/testing';
import {Api} from './api';
import {HttpClient} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('Api', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  const defaultApiConfig = {
    urls: {
      foo: 'foo',
      bar: 'bar'
    },
    environment: 'foo'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
    });

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  }));

  it('should be defined', () => {
    expect(Api).toBeDefined();
  });

  it('should return an instance', function () {
    const api = new Api(httpClient, defaultApiConfig);
    expect(api).toBeDefined();
  });

  describe('requests', () => {
    afterEach(() => {
      httpTestingController.verify();
    });

    it('should do a GET request', function () {
      const testData = { data: 'test' };
      const api = new Api(httpClient, defaultApiConfig);

      api.get('/path', {})
        .subscribe((data) => {
          expect(data).toEqual(testData);
        });

      const req = httpTestingController.expectOne('foo/path');
      expect(req.request.method).toBe('GET');
      req.flush(testData);
    });

    it('should do a POST request', function () {
      const testData = { data: 'test' };
      const api = new Api(httpClient, defaultApiConfig);

      api.post('/path', {}, {})
        .subscribe((data) => {
          expect(data).toEqual(testData);
        });

      const req = httpTestingController.expectOne('foo/path');
      expect(req.request.method).toBe('POST');
      req.flush(testData);
    });

    it('should do a PUT request', function () {
      const testData = { data: 'test' };
      const api = new Api(httpClient, defaultApiConfig);

      api.put('/path', {}, {})
        .subscribe((data) => {
          expect(data).toEqual(testData);
        });

      const req = httpTestingController.expectOne('foo/path');
      expect(req.request.method).toBe('PUT');
      req.flush(testData);
    });

    it('should do a DELETE request', function () {
      const testData = { data: 'test' };
      const api = new Api(httpClient, defaultApiConfig);

      api.delete('/path', {})
        .subscribe((data) => {
          expect(data).toEqual(testData);
        });

      const req = httpTestingController.expectOne('foo/path');
      expect(req.request.method).toBe('DELETE');
      req.flush(testData);
    });
  });
});
