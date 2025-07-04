import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryGrindingComponent } from './history-grinding.component';

describe('HistoryGrindingComponent', () => {
  let component: HistoryGrindingComponent;
  let fixture: ComponentFixture<HistoryGrindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistoryGrindingComponent]
    });
    fixture = TestBed.createComponent(HistoryGrindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
