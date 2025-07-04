import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartOilComponent } from './cart-oil.component';

describe('CartOilComponent', () => {
  let component: CartOilComponent;
  let fixture: ComponentFixture<CartOilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartOilComponent]
    });
    fixture = TestBed.createComponent(CartOilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
