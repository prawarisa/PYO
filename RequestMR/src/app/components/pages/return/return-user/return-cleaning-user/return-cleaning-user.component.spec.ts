import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnCleaningUserComponent } from './return-cleaning-user.component';

describe('ReturnCleaningUserComponent', () => {
  let component: ReturnCleaningUserComponent;
  let fixture: ComponentFixture<ReturnCleaningUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReturnCleaningUserComponent]
    });
    fixture = TestBed.createComponent(ReturnCleaningUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
