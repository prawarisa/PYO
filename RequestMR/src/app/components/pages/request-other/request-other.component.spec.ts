import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestOtherComponent } from './request-other.component';

describe('RequestOtherComponent', () => {
  let component: RequestOtherComponent;
  let fixture: ComponentFixture<RequestOtherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestOtherComponent]
    });
    fixture = TestBed.createComponent(RequestOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
