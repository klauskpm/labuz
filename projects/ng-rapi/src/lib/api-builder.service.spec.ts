import { TestBed } from '@angular/core/testing';

import { ApiBuilderService } from './api-builder.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { Api } from './api';

describe('ApiBuilderService', () => {
  let httpClient: HttpClient;
  const defaultApiConfig = {
    urls: {
      foo: 'foo'
    },
    environment: 'foo'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        ApiBuilderService
      ]
    });

    httpClient = TestBed.get(HttpClient);
  });

  it('should be created', () => {
    const service: ApiBuilderService = TestBed.get(ApiBuilderService);
    expect(service).toBeTruthy();
  });

  it('should return an Api instance', function () {
    const service: ApiBuilderService = TestBed.get(ApiBuilderService);
    const builtApi = service.build(defaultApiConfig);
    const api = new Api(httpClient, defaultApiConfig);

    expect(builtApi).toEqual(api);
  });
});
