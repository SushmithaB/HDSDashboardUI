import { TestBed } from '@angular/core/testing';

import { HttpLibService } from './http-lib.service';

describe('HttpLibService', () => {
  let service: HttpLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
