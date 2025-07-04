import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CleaningAddExcelComponent } from './cleaning-add-excel.component';

describe('CleaningAddExcelComponent', () => {
  let component: CleaningAddExcelComponent;
  let fixture: ComponentFixture<CleaningAddExcelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CleaningAddExcelComponent]
    });
    fixture = TestBed.createComponent(CleaningAddExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
