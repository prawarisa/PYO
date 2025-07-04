import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailReturnCleaningComponent } from './detail-return-cleaning.component';

describe('DetailReturnCleaningComponent', () => {
  let component: DetailReturnCleaningComponent;
  let fixture: ComponentFixture<DetailReturnCleaningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailReturnCleaningComponent]
    });
    fixture = TestBed.createComponent(DetailReturnCleaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
