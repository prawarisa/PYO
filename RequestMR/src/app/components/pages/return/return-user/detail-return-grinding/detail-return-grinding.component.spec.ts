import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailReturnGrindingComponent } from './detail-return-grinding.component';

describe('DetailReturnGrindingComponent', () => {
  let component: DetailReturnGrindingComponent;
  let fixture: ComponentFixture<DetailReturnGrindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailReturnGrindingComponent]
    });
    fixture = TestBed.createComponent(DetailReturnGrindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
