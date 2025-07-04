import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestOilComponent } from './request-oil.component';

describe('RequestOilComponent', () => {
  let component: RequestOilComponent;
  let fixture: ComponentFixture<RequestOilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestOilComponent]
    });
    fixture = TestBed.createComponent(RequestOilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
