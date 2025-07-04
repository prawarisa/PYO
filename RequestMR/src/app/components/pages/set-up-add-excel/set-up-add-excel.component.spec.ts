import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetUpAddExcelComponent } from './set-up-add-excel.component';

describe('SetUpAddExcelComponent', () => {
  let component: SetUpAddExcelComponent;
  let fixture: ComponentFixture<SetUpAddExcelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetUpAddExcelComponent]
    });
    fixture = TestBed.createComponent(SetUpAddExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
