import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnGrindingAdminComponent } from './return-grinding-admin.component';

describe('ReturnGrindingAdminComponent', () => {
  let component: ReturnGrindingAdminComponent;
  let fixture: ComponentFixture<ReturnGrindingAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReturnGrindingAdminComponent]
    });
    fixture = TestBed.createComponent(ReturnGrindingAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
