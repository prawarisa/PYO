import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrindingAddExcelComponent } from './grinding-add-excel.component';

describe('GrindingAddExcelComponent', () => {
  let component: GrindingAddExcelComponent;
  let fixture: ComponentFixture<GrindingAddExcelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrindingAddExcelComponent]
    });
    fixture = TestBed.createComponent(GrindingAddExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
