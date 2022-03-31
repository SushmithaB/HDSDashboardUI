import { TestBed } from '@angular/core/testing';

import { DeploymentsUiService } from './deployments-ui.service';

describe('DeploymentsUiService', () => {
  let service: DeploymentsUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeploymentsUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
