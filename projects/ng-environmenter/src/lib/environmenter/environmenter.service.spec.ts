import { TestBed } from '@angular/core/testing';

import { Environmenter } from './environmenter.service';

describe('Environmenter', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Environmenter = TestBed.get(Environmenter);
    expect(service).toBeTruthy();
  });
});
