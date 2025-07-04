import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetUpAddMasterComponent } from './set-up-add-master.component';

describe('SetUpAddMasterComponent', () => {
  let component: SetUpAddMasterComponent;
  let fixture: ComponentFixture<SetUpAddMasterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetUpAddMasterComponent]
    });
    fixture = TestBed.createComponent(SetUpAddMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
