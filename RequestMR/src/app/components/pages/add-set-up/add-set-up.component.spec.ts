import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSetUpComponent } from './add-set-up.component';

describe('AddSetUpComponent', () => {
  let component: AddSetUpComponent;
  let fixture: ComponentFixture<AddSetUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddSetUpComponent]
    });
    fixture = TestBed.createComponent(AddSetUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
