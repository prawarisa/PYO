import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryChooseAdminComponent } from './history-choose-admin.component';

describe('HistoryChooseAdminComponent', () => {
  let component: HistoryChooseAdminComponent;
  let fixture: ComponentFixture<HistoryChooseAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistoryChooseAdminComponent]
    });
    fixture = TestBed.createComponent(HistoryChooseAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
