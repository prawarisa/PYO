import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardGrindingComponent } from './dashboard-grinding.component';

describe('DashboardGrindingComponent', () => {
  let component: DashboardGrindingComponent;
  let fixture: ComponentFixture<DashboardGrindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardGrindingComponent]
    });
    fixture = TestBed.createComponent(DashboardGrindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
