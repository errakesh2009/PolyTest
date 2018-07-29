import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { employeeModel } from '../EmployeeModels/employee-model';
import { EmployeeService } from '../Services/EmployeeService';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-eployee-new',
  templateUrl: './eployee-new.component.html',
  styleUrls: ['./eployee-new.component.css'],

})
export class EployeeNewComponent implements OnInit {
  title = 'New Employee';
  @Output() sendChildStatus = new EventEmitter<string>();
  empModel: employeeModel = new employeeModel();
  constructor(private employeeService: EmployeeService, private activatedRoute: ActivatedRoute,
              private router:Router) {
    // this.activatedRoute.params.subscribe(params => {
    //   console.log(params);
    //   if (params['id']) { 
    //     //alert(params['id']);
    //   }
    // });
  }

  ngOnInit() {
    //debugger; 
    if (this.activatedRoute.snapshot.params["id"] != null && this.activatedRoute.snapshot.params["id"] != ":id") {
      this.empModel = this.employeeService.getEmployeeById(this.activatedRoute.snapshot.params["id"]);
      this.title = 'Edit Employee';
    }
    else {
      this.empModel.empId = "";      
    }

  }

  saveEmployee() {
    //alert(this.empModel.empName);
    //this.employeeService.setActionStatus("Saved Successfully...");
    //this.sendChildStatus.emit("Saved Successfully...");
    this.employeeService.saveEmployee(this.empModel);
    this.empModel = new employeeModel();
  }
  cancelEmployee()
  {
    this.router.navigate(["EmployeeGridview"])
  }
  resetEmployee()
  {
    this.empModel = new employeeModel();
  }
  getEmpName(emp: employeeModel): string {
    return emp.empName;
  }

}
