import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailRequestOtherComponent } from './detail-request-other.component';

describe('DetailRequestOtherComponent', () => {
  let component: DetailRequestOtherComponent;
  let fixture: ComponentFixture<DetailRequestOtherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailRequestOtherComponent]
    });
    fixture = TestBed.createComponent(DetailRequestOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
