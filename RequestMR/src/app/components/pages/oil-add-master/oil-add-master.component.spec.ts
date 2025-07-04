import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OilAddMasterComponent } from './oil-add-master.component';

describe('OilAddMasterComponent', () => {
  let component: OilAddMasterComponent;
  let fixture: ComponentFixture<OilAddMasterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OilAddMasterComponent]
    });
    fixture = TestBed.createComponent(OilAddMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
