import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailRequestOilComponent } from './detail-request-oil.component';

describe('DetailRequestOilComponent', () => {
  let component: DetailRequestOilComponent;
  let fixture: ComponentFixture<DetailRequestOilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailRequestOilComponent]
    });
    fixture = TestBed.createComponent(DetailRequestOilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
