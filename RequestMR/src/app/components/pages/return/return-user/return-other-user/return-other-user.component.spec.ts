import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnOtherUserComponent } from './return-other-user.component';

describe('ReturnOtherUserComponent', () => {
  let component: ReturnOtherUserComponent;
  let fixture: ComponentFixture<ReturnOtherUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReturnOtherUserComponent]
    });
    fixture = TestBed.createComponent(ReturnOtherUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
