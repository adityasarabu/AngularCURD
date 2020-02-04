import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[] = [
    {
      id: 1,
      name: 'Hritik Roshan',
      gender: 'Male',
      contactPreference: 'Email',
      email: 'hritikrocks@zuzubi.com',
      dateOfBirth: new Date('01/10/1974'),
      department: 'Hero-Greek God',
      isActive: true,
      photoPath: 'assets/images/hr.jpg'
    },
    {
      id: 2,
      name: 'Nidhi Agarwal',
      gender: 'Female',
      contactPreference: 'Email',
      email: 'nidhirocks@zuzubi.com',
      dateOfBirth: new Date('08/03/1993'),
      department: 'New Cleavage Queen',
      isActive: true,
      photoPath: 'assets/images/na.jpg'
    },
    {
      id: 3,
      name: 'Vijay Devarakonda',
      gender: 'Male',
      contactPreference: 'Email',
      email: 'vijayrocks@zuzubi.com',
      dateOfBirth: new Date('05/09/1989'),
      department: 'Attitude Guy',
      isActive: true,
      photoPath: 'assets/images/vd.jpg'
    },
    {
      id: 1,
      name: 'Anupama Paramerswara',
      gender: 'Female',
      contactPreference: 'Email',
      email: 'anurocks@zuzubi.com',
      dateOfBirth: new Date('02/18/1996'),
      department: 'Cute Angel',
      isActive: true,
      photoPath: 'assets/images/ap.jpg'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
