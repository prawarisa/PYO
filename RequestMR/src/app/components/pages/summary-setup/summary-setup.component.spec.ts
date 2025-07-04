import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummarySetupComponent } from './summary-setup.component';

describe('SummarySetupComponent', () => {
  let component: SummarySetupComponent;
  let fixture: ComponentFixture<SummarySetupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SummarySetupComponent]
    });
    fixture = TestBed.createComponent(SummarySetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
