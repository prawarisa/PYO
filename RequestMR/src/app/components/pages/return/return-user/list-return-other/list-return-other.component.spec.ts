import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListReturnOtherComponent } from './list-return-other.component';

describe('ListReturnOtherComponent', () => {
  let component: ListReturnOtherComponent;
  let fixture: ComponentFixture<ListReturnOtherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListReturnOtherComponent]
    });
    fixture = TestBed.createComponent(ListReturnOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
