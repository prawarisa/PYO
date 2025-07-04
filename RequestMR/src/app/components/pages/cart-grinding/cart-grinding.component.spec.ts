import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartGrindingComponent } from './cart-grinding.component';

describe('CartGrindingComponent', () => {
  let component: CartGrindingComponent;
  let fixture: ComponentFixture<CartGrindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartGrindingComponent]
    });
    fixture = TestBed.createComponent(CartGrindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
