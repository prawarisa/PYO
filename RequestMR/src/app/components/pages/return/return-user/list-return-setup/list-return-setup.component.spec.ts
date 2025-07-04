import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListReturnSetupComponent } from './list-return-setup.component';

describe('ListReturnSetupComponent', () => {
  let component: ListReturnSetupComponent;
  let fixture: ComponentFixture<ListReturnSetupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListReturnSetupComponent]
    });
    fixture = TestBed.createComponent(ListReturnSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
