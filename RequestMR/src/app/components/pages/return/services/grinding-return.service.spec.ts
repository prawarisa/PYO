import { TestBed } from '@angular/core/testing';

import { GrindingReturnService } from './grinding-return.service';

describe('GrindingReturnService', () => {
  let service: GrindingReturnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrindingReturnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
