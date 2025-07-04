import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuttingToolAddMasterComponent } from './cutting-tool-add-master.component';

describe('CuttingToolAddMasterComponent', () => {
  let component: CuttingToolAddMasterComponent;
  let fixture: ComponentFixture<CuttingToolAddMasterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuttingToolAddMasterComponent]
    });
    fixture = TestBed.createComponent(CuttingToolAddMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
