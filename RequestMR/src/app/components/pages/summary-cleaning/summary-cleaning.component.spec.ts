import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryCleaningComponent } from './summary-cleaning.component';

describe('SummaryCleaningComponent', () => {
  let component: SummaryCleaningComponent;
  let fixture: ComponentFixture<SummaryCleaningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SummaryCleaningComponent]
    });
    fixture = TestBed.createComponent(SummaryCleaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
