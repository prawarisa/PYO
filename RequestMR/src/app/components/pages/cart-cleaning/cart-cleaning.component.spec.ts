import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartCleaningComponent } from './cart-cleaning.component';

describe('CartCleaningComponent', () => {
  let component: CartCleaningComponent;
  let fixture: ComponentFixture<CartCleaningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartCleaningComponent]
    });
    fixture = TestBed.createComponent(CartCleaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
