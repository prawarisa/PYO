import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartOtherComponent } from './cart-other.component';

describe('CartOtherComponent', () => {
  let component: CartOtherComponent;
  let fixture: ComponentFixture<CartOtherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartOtherComponent]
    });
    fixture = TestBed.createComponent(CartOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
