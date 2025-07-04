import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorySetupComponent } from './history-setup.component';

describe('HistorySetupComponent', () => {
  let component: HistorySetupComponent;
  let fixture: ComponentFixture<HistorySetupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistorySetupComponent]
    });
    fixture = TestBed.createComponent(HistorySetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
