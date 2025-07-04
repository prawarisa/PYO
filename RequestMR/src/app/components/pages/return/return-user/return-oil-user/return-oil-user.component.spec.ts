import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnOilUserComponent } from './return-oil-user.component';

describe('ReturnOilUserComponent', () => {
  let component: ReturnOilUserComponent;
  let fixture: ComponentFixture<ReturnOilUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReturnOilUserComponent]
    });
    fixture = TestBed.createComponent(ReturnOilUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
