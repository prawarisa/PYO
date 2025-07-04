import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestCleaningComponent } from './request-cleaning.component';

describe('RequestCleaningComponent', () => {
  let component: RequestCleaningComponent;
  let fixture: ComponentFixture<RequestCleaningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestCleaningComponent]
    });
    fixture = TestBed.createComponent(RequestCleaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
