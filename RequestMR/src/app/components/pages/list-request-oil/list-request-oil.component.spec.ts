import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRequestOilComponent } from './list-request-oil.component';

describe('ListRequestOilComponent', () => {
  let component: ListRequestOilComponent;
  let fixture: ComponentFixture<ListRequestOilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListRequestOilComponent]
    });
    fixture = TestBed.createComponent(ListRequestOilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
