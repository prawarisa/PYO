import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiveOtherComponent } from './receive-other.component';

describe('ReceiveOtherComponent', () => {
  let component: ReceiveOtherComponent;
  let fixture: ComponentFixture<ReceiveOtherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReceiveOtherComponent]
    });
    fixture = TestBed.createComponent(ReceiveOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
