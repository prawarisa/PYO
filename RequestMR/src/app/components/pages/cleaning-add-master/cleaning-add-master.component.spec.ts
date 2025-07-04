import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CleaningAddMasterComponent } from './cleaning-add-master.component';

describe('CleaningAddMasterComponent', () => {
  let component: CleaningAddMasterComponent;
  let fixture: ComponentFixture<CleaningAddMasterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CleaningAddMasterComponent]
    });
    fixture = TestBed.createComponent(CleaningAddMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
