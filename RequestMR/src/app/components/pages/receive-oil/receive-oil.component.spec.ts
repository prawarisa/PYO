import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiveOilComponent } from './receive-oil.component';

describe('ReceiveOilComponent', () => {
  let component: ReceiveOilComponent;
  let fixture: ComponentFixture<ReceiveOilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReceiveOilComponent]
    });
    fixture = TestBed.createComponent(ReceiveOilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
