import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  public empList: any = new BehaviorSubject([]);

  constructor() {
  }

  setData(data: any): void {
    console.log(data);
    this.empList.next(data);
  }

  getData(): any {
    return this.empList.asObservable();
  }

  getDataByID(id: any): any {
    return this.empList.filter((x: any) => x.id == id).asObservable();
  }

}
