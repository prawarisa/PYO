import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryOtherComponent } from './summary-other.component';

describe('SummaryOtherComponent', () => {
  let component: SummaryOtherComponent;
  let fixture: ComponentFixture<SummaryOtherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SummaryOtherComponent]
    });
    fixture = TestBed.createComponent(SummaryOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
