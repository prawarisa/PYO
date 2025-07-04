import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListReturnOilComponent } from './list-return-oil.component';

describe('ListReturnOilComponent', () => {
  let component: ListReturnOilComponent;
  let fixture: ComponentFixture<ListReturnOilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListReturnOilComponent]
    });
    fixture = TestBed.createComponent(ListReturnOilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
