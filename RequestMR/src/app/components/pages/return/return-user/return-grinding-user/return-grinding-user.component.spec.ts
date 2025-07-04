import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnGrindingUserComponent } from './return-grinding-user.component';

describe('ReturnGrindingUserComponent', () => {
  let component: ReturnGrindingUserComponent;
  let fixture: ComponentFixture<ReturnGrindingUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReturnGrindingUserComponent]
    });
    fixture = TestBed.createComponent(ReturnGrindingUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
