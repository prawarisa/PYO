import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OilUpdateComponent } from './oil-update.component';

describe('OilUpdateComponent', () => {
  let component: OilUpdateComponent;
  let fixture: ComponentFixture<OilUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OilUpdateComponent]
    });
    fixture = TestBed.createComponent(OilUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
