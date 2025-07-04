import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnCuttingtoolUserComponent } from './return-cuttingtool-user.component';

describe('ReturnCuttingtoolUserComponent', () => {
  let component: ReturnCuttingtoolUserComponent;
  let fixture: ComponentFixture<ReturnCuttingtoolUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReturnCuttingtoolUserComponent]
    });
    fixture = TestBed.createComponent(ReturnCuttingtoolUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
