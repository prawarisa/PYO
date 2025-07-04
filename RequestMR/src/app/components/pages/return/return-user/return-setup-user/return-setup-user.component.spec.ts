import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnSetupUserComponent } from './return-setup-user.component';

describe('ReturnSetupUserComponent', () => {
  let component: ReturnSetupUserComponent;
  let fixture: ComponentFixture<ReturnSetupUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReturnSetupUserComponent]
    });
    fixture = TestBed.createComponent(ReturnSetupUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
