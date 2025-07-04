import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestGrindingComponent } from './request-grinding.component';

describe('RequestGrindingComponent', () => {
  let component: RequestGrindingComponent;
  let fixture: ComponentFixture<RequestGrindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestGrindingComponent]
    });
    fixture = TestBed.createComponent(RequestGrindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
