import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuttingToolUpdateComponent } from './cutting-tool-update.component';

describe('CuttingToolUpdateComponent', () => {
  let component: CuttingToolUpdateComponent;
  let fixture: ComponentFixture<CuttingToolUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuttingToolUpdateComponent]
    });
    fixture = TestBed.createComponent(CuttingToolUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
