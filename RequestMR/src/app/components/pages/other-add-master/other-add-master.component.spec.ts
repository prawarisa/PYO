import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherAddMasterComponent } from './other-add-master.component';

describe('OtherAddMasterComponent', () => {
  let component: OtherAddMasterComponent;
  let fixture: ComponentFixture<OtherAddMasterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtherAddMasterComponent]
    });
    fixture = TestBed.createComponent(OtherAddMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
