import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryChooseComponent } from './summary-choose.component';

describe('SummaryChooseComponent', () => {
  let component: SummaryChooseComponent;
  let fixture: ComponentFixture<SummaryChooseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SummaryChooseComponent]
    });
    fixture = TestBed.createComponent(SummaryChooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
