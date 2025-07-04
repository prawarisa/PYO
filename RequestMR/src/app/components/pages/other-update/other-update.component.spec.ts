import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherUpdateComponent } from './other-update.component';

describe('OtherUpdateComponent', () => {
  let component: OtherUpdateComponent;
  let fixture: ComponentFixture<OtherUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtherUpdateComponent]
    });
    fixture = TestBed.createComponent(OtherUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
