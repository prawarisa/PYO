import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReturnComponent } from '../return.component';
import { ReturnAdminComponent } from './return-admin.component';

describe('ReturnAdminComponent', () => {
  let component: ReturnAdminComponent;
  let fixture: ComponentFixture<ReturnAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReturnAdminComponent]
    });
    fixture = TestBed.createComponent(ReturnAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
