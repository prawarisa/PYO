import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOilComponent } from './dashboard-oil.component';

describe('DashboardOilComponent', () => {
  let component: DashboardOilComponent;
  let fixture: ComponentFixture<DashboardOilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOilComponent]
    });
    fixture = TestBed.createComponent(DashboardOilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
