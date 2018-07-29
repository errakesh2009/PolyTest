import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeGridviewComponent } from './employee-gridview.component';

describe('EmployeeGridviewComponent', () => {
  let component: EmployeeGridviewComponent;
  let fixture: ComponentFixture<EmployeeGridviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeGridviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeGridviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
