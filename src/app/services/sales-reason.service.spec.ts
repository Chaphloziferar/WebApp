import { TestBed } from '@angular/core/testing';

import { SalesReasonService } from './sales-reason.service';

describe('SalesReasonService', () => {
  let service: SalesReasonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalesReasonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
