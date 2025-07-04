import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryOtherComponent } from './history-other.component';

describe('HistoryOtherComponent', () => {
  let component: HistoryOtherComponent;
  let fixture: ComponentFixture<HistoryOtherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistoryOtherComponent]
    });
    fixture = TestBed.createComponent(HistoryOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
