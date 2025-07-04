import { TestBed } from '@angular/core/testing';

import { CuttingtoolReturnService } from './cuttingtool-return.service';

describe('CuttingtoolReturnService', () => {
  let service: CuttingtoolReturnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CuttingtoolReturnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
