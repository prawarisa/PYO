import { TestBed } from '@angular/core/testing';

import { OtherReturnService } from './other-return.service';

describe('OtherReturnService', () => {
  let service: OtherReturnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OtherReturnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
