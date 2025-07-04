import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartSetupComponent } from './cart-setup.component';

describe('CartSetupComponent', () => {
  let component: CartSetupComponent;
  let fixture: ComponentFixture<CartSetupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartSetupComponent]
    });
    fixture = TestBed.createComponent(CartSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
