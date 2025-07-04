import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRequestOtherComponent } from './list-request-other.component';

describe('ListRequestOtherComponent', () => {
  let component: ListRequestOtherComponent;
  let fixture: ComponentFixture<ListRequestOtherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListRequestOtherComponent]
    });
    fixture = TestBed.createComponent(ListRequestOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
