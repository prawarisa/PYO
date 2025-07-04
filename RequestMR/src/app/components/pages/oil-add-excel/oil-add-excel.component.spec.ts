import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OilAddExcelComponent } from './oil-add-excel.component';

describe('OilAddExcelComponent', () => {
  let component: OilAddExcelComponent;
  let fixture: ComponentFixture<OilAddExcelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OilAddExcelComponent]
    });
    fixture = TestBed.createComponent(OilAddExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
