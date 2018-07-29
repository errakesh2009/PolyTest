import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { EmployeeService } from '../Services/EmployeeService';
import { employeeModel } from '../EmployeeModels/employee-model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-employee-gridview',
  templateUrl: './employee-gridview.component.html',
  styleUrls: ['./employee-gridview.component.css']
})
export class EmployeeGridviewComponent implements OnInit {

  constructor(private employeeService: EmployeeService, private router:Router) { }
  empList:employeeModel[];
  @ViewChild('empDetail') empDetails: ElementRef;
  ngOnInit() {    
    this.empList = this.employeeService.getEmployee();
  }
  getEmpDetail(emp:employeeModel)
  {
   // alert(emp.empName);
   //debugger;
    this.router.navigate(["EployeeNew/",emp.empId])
  }

}
