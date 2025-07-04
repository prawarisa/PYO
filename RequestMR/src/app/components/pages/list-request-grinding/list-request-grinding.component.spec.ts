import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRequestGrindingComponent } from './list-request-grinding.component';

describe('ListRequestGrindingComponent', () => {
  let component: ListRequestGrindingComponent;
  let fixture: ComponentFixture<ListRequestGrindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListRequestGrindingComponent]
    });
    fixture = TestBed.createComponent(ListRequestGrindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
