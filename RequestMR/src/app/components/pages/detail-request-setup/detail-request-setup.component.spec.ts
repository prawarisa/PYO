import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailRequestSetupComponent } from './detail-request-setup.component';

describe('DetailRequestSetupComponent', () => {
  let component: DetailRequestSetupComponent;
  let fixture: ComponentFixture<DetailRequestSetupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailRequestSetupComponent]
    });
    fixture = TestBed.createComponent(DetailRequestSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
