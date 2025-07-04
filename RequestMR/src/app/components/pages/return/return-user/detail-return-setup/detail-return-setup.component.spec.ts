import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailReturnSetupComponent } from './detail-return-setup.component';

describe('DetailReturnSetupComponent', () => {
  let component: DetailReturnSetupComponent;
  let fixture: ComponentFixture<DetailReturnSetupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailReturnSetupComponent]
    });
    fixture = TestBed.createComponent(DetailReturnSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
