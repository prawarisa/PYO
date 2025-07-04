import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListReturnCuttingtoolComponent } from './list-return-cuttingtool.component';

describe('ListReturnCuttingtoolComponent', () => {
  let component: ListReturnCuttingtoolComponent;
  let fixture: ComponentFixture<ListReturnCuttingtoolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListReturnCuttingtoolComponent]
    });
    fixture = TestBed.createComponent(ListReturnCuttingtoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
