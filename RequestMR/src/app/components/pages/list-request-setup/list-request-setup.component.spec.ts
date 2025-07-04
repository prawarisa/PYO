import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRequestSetupComponent } from './list-request-setup.component';

describe('ListRequestSetupComponent', () => {
  let component: ListRequestSetupComponent;
  let fixture: ComponentFixture<ListRequestSetupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListRequestSetupComponent]
    });
    fixture = TestBed.createComponent(ListRequestSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
