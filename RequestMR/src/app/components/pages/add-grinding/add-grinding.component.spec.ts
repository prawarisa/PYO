import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGrindingComponent } from './add-grinding.component';

describe('AddGrindingComponent', () => {
  let component: AddGrindingComponent;
  let fixture: ComponentFixture<AddGrindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddGrindingComponent]
    });
    fixture = TestBed.createComponent(AddGrindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
