import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCleaningComponent } from './add-cleaning.component';

describe('AddCleaningComponent', () => {
  let component: AddCleaningComponent;
  let fixture: ComponentFixture<AddCleaningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCleaningComponent]
    });
    fixture = TestBed.createComponent(AddCleaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
