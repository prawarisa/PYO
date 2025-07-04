import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailReturnCuttingtoolComponent } from './detail-return-cuttingtool.component';

describe('DetailReturnCuttingtoolComponent', () => {
  let component: DetailReturnCuttingtoolComponent;
  let fixture: ComponentFixture<DetailReturnCuttingtoolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailReturnCuttingtoolComponent]
    });
    fixture = TestBed.createComponent(DetailReturnCuttingtoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
