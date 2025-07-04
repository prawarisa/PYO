import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnOtherAdminComponent } from './return-other-admin.component';

describe('ReturnOtherAdminComponent', () => {
  let component: ReturnOtherAdminComponent;
  let fixture: ComponentFixture<ReturnOtherAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReturnOtherAdminComponent]
    });
    fixture = TestBed.createComponent(ReturnOtherAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
