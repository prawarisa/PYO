import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryCleaningComponent } from './history-cleaning.component';

describe('HistoryCleaningComponent', () => {
  let component: HistoryCleaningComponent;
  let fixture: ComponentFixture<HistoryCleaningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistoryCleaningComponent]
    });
    fixture = TestBed.createComponent(HistoryCleaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
