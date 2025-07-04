import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiveGrindingComponent } from './receive-grinding.component';

describe('ReceiveGrindingComponent', () => {
  let component: ReceiveGrindingComponent;
  let fixture: ComponentFixture<ReceiveGrindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReceiveGrindingComponent]
    });
    fixture = TestBed.createComponent(ReceiveGrindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
