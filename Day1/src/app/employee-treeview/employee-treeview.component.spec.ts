import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeTreeviewComponent } from './employee-treeview.component';

describe('EmployeeTreeviewComponent', () => {
  let component: EmployeeTreeviewComponent;
  let fixture: ComponentFixture<EmployeeTreeviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeTreeviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeTreeviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
