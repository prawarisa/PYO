import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailRequestCleaningComponent } from './detail-request-cleaning.component';

describe('DetailRequestCleaningComponent', () => {
  let component: DetailRequestCleaningComponent;
  let fixture: ComponentFixture<DetailRequestCleaningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailRequestCleaningComponent]
    });
    fixture = TestBed.createComponent(DetailRequestCleaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
