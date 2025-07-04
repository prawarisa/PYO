import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherAddExcelComponent } from './other-add-excel.component';

describe('OtherAddExcelComponent', () => {
  let component: OtherAddExcelComponent;
  let fixture: ComponentFixture<OtherAddExcelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtherAddExcelComponent]
    });
    fixture = TestBed.createComponent(OtherAddExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
