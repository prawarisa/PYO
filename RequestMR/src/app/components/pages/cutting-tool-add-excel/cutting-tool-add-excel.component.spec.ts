import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuttingToolAddExcelComponent } from './cutting-tool-add-excel.component';

describe('CuttingToolAddExcelComponent', () => {
  let component: CuttingToolAddExcelComponent;
  let fixture: ComponentFixture<CuttingToolAddExcelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuttingToolAddExcelComponent]
    });
    fixture = TestBed.createComponent(CuttingToolAddExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
