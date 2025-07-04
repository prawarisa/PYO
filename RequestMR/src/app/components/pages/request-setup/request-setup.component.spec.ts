import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestSetupComponent } from './request-setup.component';

describe('RequestSetupComponent', () => {
  let component: RequestSetupComponent;
  let fixture: ComponentFixture<RequestSetupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestSetupComponent]
    });
    fixture = TestBed.createComponent(RequestSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
