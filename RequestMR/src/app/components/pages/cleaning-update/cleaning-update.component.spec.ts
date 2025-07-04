import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CleaningUpdateComponent } from './cleaning-update.component';

describe('CleaningUpdateComponent', () => {
  let component: CleaningUpdateComponent;
  let fixture: ComponentFixture<CleaningUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CleaningUpdateComponent]
    });
    fixture = TestBed.createComponent(CleaningUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
