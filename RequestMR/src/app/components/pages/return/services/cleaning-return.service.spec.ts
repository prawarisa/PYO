import { TestBed } from '@angular/core/testing';

import { CleaningReturnService } from './cleaning-return.service';

describe('CleaningReturnService', () => {
  let service: CleaningReturnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CleaningReturnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
