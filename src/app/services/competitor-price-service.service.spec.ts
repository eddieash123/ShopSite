import { TestBed } from '@angular/core/testing';

import { CompetitorPriceService } from './competitor-price-service.service';

describe('CompetitorPriceServiceService', () => {
  let service: CompetitorPriceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompetitorPriceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
