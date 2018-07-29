import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EployeeNewComponent } from './eployee-new/eployee-new.component';
import { EmployeeTreeviewComponent } from './employee-treeview/employee-treeview.component';
import { EmployeeGridviewComponent } from './employee-gridview/employee-gridview.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeService } from './Services/EmployeeService';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';


const appRoutes: Routes = [
  { path: 'EployeeNew/:id', component: EployeeNewComponent },
  { path: 'EmployeeTreeview', component: EmployeeTreeviewComponent },
  { path: 'EmployeeGridview', component: EmployeeGridviewComponent },
  { path: 'ParentChild', component: ParentComponent },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,    
    EployeeNewComponent,
    EmployeeTreeviewComponent,
    EmployeeGridviewComponent,
    PageNotFoundComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot( appRoutes)
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
