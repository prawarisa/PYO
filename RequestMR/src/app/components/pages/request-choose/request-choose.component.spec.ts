import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestChooseComponent } from './request-choose.component';

describe('RequestChooseComponent', () => {
  let component: RequestChooseComponent;
  let fixture: ComponentFixture<RequestChooseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestChooseComponent]
    });
    fixture = TestBed.createComponent(RequestChooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
