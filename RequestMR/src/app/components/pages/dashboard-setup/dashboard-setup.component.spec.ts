import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSetupComponent } from './dashboard-setup.component';

describe('DashboardSetupComponent', () => {
  let component: DashboardSetupComponent;
  let fixture: ComponentFixture<DashboardSetupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardSetupComponent]
    });
    fixture = TestBed.createComponent(DashboardSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
