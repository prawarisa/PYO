import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetUpUpdateComponent } from './set-up-update.component';

describe('SetUpUpdateComponent', () => {
  let component: SetUpUpdateComponent;
  let fixture: ComponentFixture<SetUpUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetUpUpdateComponent]
    });
    fixture = TestBed.createComponent(SetUpUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
