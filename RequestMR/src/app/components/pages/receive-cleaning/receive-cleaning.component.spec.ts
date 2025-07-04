import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiveCleaningComponent } from './receive-cleaning.component';

describe('ReceiveCleaningComponent', () => {
  let component: ReceiveCleaningComponent;
  let fixture: ComponentFixture<ReceiveCleaningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReceiveCleaningComponent]
    });
    fixture = TestBed.createComponent(ReceiveCleaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
