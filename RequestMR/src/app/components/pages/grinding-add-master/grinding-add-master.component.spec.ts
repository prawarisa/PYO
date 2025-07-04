import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrindingAddMasterComponent } from './grinding-add-master.component';

describe('GrindingAddMasterComponent', () => {
  let component: GrindingAddMasterComponent;
  let fixture: ComponentFixture<GrindingAddMasterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrindingAddMasterComponent]
    });
    fixture = TestBed.createComponent(GrindingAddMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
