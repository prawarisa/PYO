import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOtherComponent } from './dashboard-other.component';

describe('DashboardOtherComponent', () => {
  let component: DashboardOtherComponent;
  let fixture: ComponentFixture<DashboardOtherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOtherComponent]
    });
    fixture = TestBed.createComponent(DashboardOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
