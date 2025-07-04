import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnSetupAdminComponent } from './return-setup-admin.component';

describe('ReturnSetupAdminComponent', () => {
  let component: ReturnSetupAdminComponent;
  let fixture: ComponentFixture<ReturnSetupAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReturnSetupAdminComponent]
    });
    fixture = TestBed.createComponent(ReturnSetupAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
