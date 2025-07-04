import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRequestCleaningComponent } from './list-request-cleaning.component';

describe('ListRequestCleaningComponent', () => {
  let component: ListRequestCleaningComponent;
  let fixture: ComponentFixture<ListRequestCleaningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListRequestCleaningComponent]
    });
    fixture = TestBed.createComponent(ListRequestCleaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
