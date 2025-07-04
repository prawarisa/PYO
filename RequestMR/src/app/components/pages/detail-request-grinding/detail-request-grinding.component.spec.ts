import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailRequestGrindingComponent } from './detail-request-grinding.component';

describe('DetailRequestGrindingComponent', () => {
  let component: DetailRequestGrindingComponent;
  let fixture: ComponentFixture<DetailRequestGrindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailRequestGrindingComponent]
    });
    fixture = TestBed.createComponent(DetailRequestGrindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
