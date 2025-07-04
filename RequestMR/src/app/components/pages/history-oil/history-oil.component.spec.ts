import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryOilComponent } from './history-oil.component';

describe('HistoryOilComponent', () => {
  let component: HistoryOilComponent;
  let fixture: ComponentFixture<HistoryOilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistoryOilComponent]
    });
    fixture = TestBed.createComponent(HistoryOilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
