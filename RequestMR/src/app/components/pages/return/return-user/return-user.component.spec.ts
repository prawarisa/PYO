import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnUserComponent } from './return-user.component';

describe('ReturnUserComponent', () => {
  let component: ReturnUserComponent;
  let fixture: ComponentFixture<ReturnUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReturnUserComponent]
    });
    fixture = TestBed.createComponent(ReturnUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
