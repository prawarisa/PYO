import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrindingUpdateComponent } from './grinding-update.component';

describe('GrindingUpdateComponent', () => {
  let component: GrindingUpdateComponent;
  let fixture: ComponentFixture<GrindingUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrindingUpdateComponent]
    });
    fixture = TestBed.createComponent(GrindingUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
