import { Component } from '@angular/core';
import { EmployeeService } from './Services/EmployeeService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  childStatus = '...';
constructor(private employeeService:EmployeeService)
{ }
  // getChildStatus($event)
  // {
  //   this.childStatus=$event;
  // }
  getStatus()
  {
    alert(this.employeeService.getActionStatus());
  }
}
