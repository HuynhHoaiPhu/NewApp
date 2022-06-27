import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../models/Students';
import { CommonService } from '../Services/common.service';
import { HttpServerService } from '../Services/http-server.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  public students: Student[] = [];
  public id = "";
  public code = "";
  public gender = "";
   constructor(private common: CommonService,
    private serverHttp: HttpServerService,
    private router: Router ) {}

  ngOnInit(): void {
    this.serverHttp.getStudents().subscribe((data) =>{
        console.log("students", data);
        this.students = data;
    });
  }
  public addStudent() {
    this.router.navigate(['formstudent'])
  }

}
