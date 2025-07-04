import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiveSetupComponent } from './receive-setup.component';

describe('ReceiveSetupComponent', () => {
  let component: ReceiveSetupComponent;
  let fixture: ComponentFixture<ReceiveSetupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReceiveSetupComponent]
    });
    fixture = TestBed.createComponent(ReceiveSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
