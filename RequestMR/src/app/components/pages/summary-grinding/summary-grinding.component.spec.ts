import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryGrindingComponent } from './summary-grinding.component';

describe('SummaryGrindingComponent', () => {
  let component: SummaryGrindingComponent;
  let fixture: ComponentFixture<SummaryGrindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SummaryGrindingComponent]
    });
    fixture = TestBed.createComponent(SummaryGrindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
