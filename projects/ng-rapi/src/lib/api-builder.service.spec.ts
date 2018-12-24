import { TestBed } from '@angular/core/testing';

import { ApiBuilderService } from './api-builder.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

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
});
