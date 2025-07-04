import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCleaningComponent } from './dashboard-cleaning.component';

describe('DashboardCleaningComponent', () => {
  let component: DashboardCleaningComponent;
  let fixture: ComponentFixture<DashboardCleaningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardCleaningComponent]
    });
    fixture = TestBed.createComponent(DashboardCleaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
