import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailReturnOtherComponent } from './detail-return-other.component';

describe('DetailReturnOtherComponent', () => {
  let component: DetailReturnOtherComponent;
  let fixture: ComponentFixture<DetailReturnOtherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailReturnOtherComponent]
    });
    fixture = TestBed.createComponent(DetailReturnOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
