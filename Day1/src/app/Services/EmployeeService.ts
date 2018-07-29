import {Injectable} from '@angular/core';
import {employeeModel} from '../EmployeeModels/employee-model';

@Injectable()
export class EmployeeService
{
    private actionStatus:string;
    private empList:employeeModel[]=[
        {empName:"Rakesh",empId:"1",empMobile:"898988989",empEmail:"r@r.com"},
        {empName:"Kumar",empId:"2",empMobile:"502525252",empEmail:"k@k.com"}
    ];
    
    getActionStatus()
    {
        return this.actionStatus;
    }
    setActionStatus(status:string)
    { 
        this.actionStatus= status;
    }
    saveEmployee(emp:employeeModel)
    {        
        this.empList.push(emp);
    }
    getEmployee()
    {        
        return this.empList;
    }
    getEmployeeById(id:string)
    {        
        return this.empList.find(y=>y.empId == id);
    }
}