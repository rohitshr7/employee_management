import {EmployeeService} from '../employee.service';
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  empList: any = [];

  constructor(private employeeService: EmployeeService, private router: Router) {
  }


  ngOnInit(): void {
    this.employeeService.getData().subscribe((data: any) => {
      console.log(data);
      this.empList = data;
    });
  }

  deleteData(index: number): void {
    console.log(index);
    this.empList = this.empList.filter((x: any) => x.id != index);
  }

  updateData(id: any): void {
    // console.log(item.id);
    this.router.navigate([`/update/${id}`]);
    // this.empList.id = item.id;
    // this.empList.name = item.name;
    // this.empList.address = item.address;
    // this.empList.contact = item.contact;
    // this.empList.email = item.email;


  }


}

