import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListReturnGrindingComponent } from './list-return-grinding.component';

describe('ListReturnGrindingComponent', () => {
  let component: ListReturnGrindingComponent;
  let fixture: ComponentFixture<ListReturnGrindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListReturnGrindingComponent]
    });
    fixture = TestBed.createComponent(ListReturnGrindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
