import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListChooseAdminComponent } from './list-choose-admin.component';

describe('ListChooseAdminComponent', () => {
  let component: ListChooseAdminComponent;
  let fixture: ComponentFixture<ListChooseAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListChooseAdminComponent]
    });
    fixture = TestBed.createComponent(ListChooseAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
