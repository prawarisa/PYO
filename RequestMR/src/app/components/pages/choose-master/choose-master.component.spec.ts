import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseMasterComponent } from './choose-master.component';

describe('ChooseMasterComponent', () => {
  let component: ChooseMasterComponent;
  let fixture: ComponentFixture<ChooseMasterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChooseMasterComponent]
    });
    fixture = TestBed.createComponent(ChooseMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
