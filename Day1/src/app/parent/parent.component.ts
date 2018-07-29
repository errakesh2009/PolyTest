import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../Services/EmployeeService';
import { Router } from '@angular/router';
import { employeeModel } from '../EmployeeModels/employee-model';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  loadChild:boolean=false;
  title:string="Parent Component";
  constructor(private employeeService: EmployeeService, private router:Router) { }
  empList:employeeModel[];
  empModelP: employeeModel;

  ngOnInit() {
    this.empList = this.employeeService.getEmployee();
  }
  getEmpDetail(emp:employeeModel)
  {
    this.empModelP = emp;
    this.loadChild=true;
  }
  getCancelChild(event)
  {
    //alert(event);
    this.loadChild=false;
  }
}
