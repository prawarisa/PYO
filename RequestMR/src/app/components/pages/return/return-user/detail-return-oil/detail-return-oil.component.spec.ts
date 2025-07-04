import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailReturnOilComponent } from './detail-return-oil.component';

describe('DetailReturnOilComponent', () => {
  let component: DetailReturnOilComponent;
  let fixture: ComponentFixture<DetailReturnOilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailReturnOilComponent]
    });
    fixture = TestBed.createComponent(DetailReturnOilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
