import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListReturnCleaningComponent } from './list-return-cleaning.component';

describe('ListReturnCleaningComponent', () => {
  let component: ListReturnCleaningComponent;
  let fixture: ComponentFixture<ListReturnCleaningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListReturnCleaningComponent]
    });
    fixture = TestBed.createComponent(ListReturnCleaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
