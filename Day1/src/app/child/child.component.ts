import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { employeeModel } from '../EmployeeModels/employee-model';
import { EmployeeService } from '../Services/EmployeeService';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  title:string="Child Component";
  @Output() cancelChild=new EventEmitter();

  @Input() empModel: employeeModel = new employeeModel();
  constructor(private employeeService:EmployeeService) { }

  ngOnInit() {
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
    this.cancelChild.emit(false);
    //this.router.navigate(["EmployeeGridview"])
  }
  resetEmployee()
  {
    this.empModel = new employeeModel();
  }
}
