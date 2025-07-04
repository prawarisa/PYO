import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnCuttingtoolAdminComponent } from './return-cuttingtool-admin.component';

describe('ReturnCuttingtoolAdminComponent', () => {
  let component: ReturnCuttingtoolAdminComponent;
  let fixture: ComponentFixture<ReturnCuttingtoolAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReturnCuttingtoolAdminComponent]
    });
    fixture = TestBed.createComponent(ReturnCuttingtoolAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
