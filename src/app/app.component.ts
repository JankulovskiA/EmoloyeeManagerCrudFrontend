import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public employees: Employee[] = [];
  
  constructor (private employeeSerice: EmployeeService){}
  ngOnInit(): void {
    this.getEmployees()
  }

  public getEmployees(): void {
    this.employeeSerice.getEmployees().subscribe(
      (response: Employee[]) => {
      this.employees = response;
    },
    (error: HttpErrorResponse) => {
      alert(error.message); 
    });
  }
}
