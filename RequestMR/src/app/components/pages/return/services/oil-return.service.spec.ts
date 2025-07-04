import { TestBed } from '@angular/core/testing';

import { OilReturnService } from './oil-return.service';

describe('OilReturnService', () => {
  let service: OilReturnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OilReturnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
