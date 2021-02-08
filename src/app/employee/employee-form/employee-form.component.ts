import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EmployeeService} from '../employee.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  empForm: FormGroup | any;
  empList: any = [];

  routeID: any;

  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute, public service: EmployeeService) {
    this.activatedRoute.paramMap.subscribe((val: any) => {
      console.log(val);
      this.routeID = val.params.empID;
      this.service.getDataByID(this.routeID).subscribe((res: any) => {
        console.log(res);
      });
    });
  }

  ngOnInit(): void {
    this.empForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      contact: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  getFormData(): void {
    if (this.empForm.invalid) {
      alert('Fill All the fields');
      return;
    }
    this.empList.push(this.empForm.value);

    this.service.setData(this.empList);
    // this.empForm.reset();
    // alert('Employee Added');


    console.log(this.empForm.value);

  }

  clear(): void {
    this.empForm.reset();

  }


}
