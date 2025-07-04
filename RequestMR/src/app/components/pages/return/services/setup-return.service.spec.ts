import { TestBed } from '@angular/core/testing';

import { SetupReturnService } from './setup-return.service';

describe('SetupReturnService', () => {
  let service: SetupReturnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetupReturnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
