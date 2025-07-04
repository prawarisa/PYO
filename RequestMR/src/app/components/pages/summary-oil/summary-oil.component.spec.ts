import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryOilComponent } from './summary-oil.component';

describe('SummaryOilComponent', () => {
  let component: SummaryOilComponent;
  let fixture: ComponentFixture<SummaryOilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SummaryOilComponent]
    });
    fixture = TestBed.createComponent(SummaryOilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
