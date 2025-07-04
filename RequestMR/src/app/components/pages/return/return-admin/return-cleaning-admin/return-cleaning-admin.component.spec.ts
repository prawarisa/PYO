import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnCleaningAdminComponent } from './return-cleaning-admin.component';

describe('ReturnCleaningAdminComponent', () => {
  let component: ReturnCleaningAdminComponent;
  let fixture: ComponentFixture<ReturnCleaningAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReturnCleaningAdminComponent]
    });
    fixture = TestBed.createComponent(ReturnCleaningAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
