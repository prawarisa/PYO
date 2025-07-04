import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCuttingtoolComponent } from './add-cuttingtool.component';

describe('AddCuttingtoolComponent', () => {
  let component: AddCuttingtoolComponent;
  let fixture: ComponentFixture<AddCuttingtoolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCuttingtoolComponent]
    });
    fixture = TestBed.createComponent(AddCuttingtoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
