import {Component, Input, OnInit} from '@angular/core';
import {RestApiService} from '../shared/rest-api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {
  @Input() employeeDetails = { name: '', email: '', phone: 0 }

  constructor( public restApi: RestApiService, public router: Router) { }

  ngOnInit() {
  }

  addEmployee(dataEmployee) {
    this.restApi.createEmployee(this.employeeDetails)
      .subscribe((data: {}) => {
        this.router.navigate(['/employees-list']);
      });
  }

}
