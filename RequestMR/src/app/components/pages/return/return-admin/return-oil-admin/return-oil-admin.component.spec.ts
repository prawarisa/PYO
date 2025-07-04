import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnOilAdminComponent } from './return-oil-admin.component';

describe('ReturnOilAdminComponent', () => {
  let component: ReturnOilAdminComponent;
  let fixture: ComponentFixture<ReturnOilAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReturnOilAdminComponent]
    });
    fixture = TestBed.createComponent(ReturnOilAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
