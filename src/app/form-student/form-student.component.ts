import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-student',
  templateUrl: './form-student.component.html',
  styleUrls: ['./form-student.component.css']
})
export class FormStudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  StudentsForm = new FormGroup(
    {
      code: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required), 
      firstName : new FormControl('', Validators.required),
      lastName : new FormControl('', Validators.required),
      Dob: new FormControl(''),
      Email: new FormControl(''),
      phone: new FormControl(''),
      picture: new FormControl('')
    }
  )
  onSubmit() {
    /* console.log(this.StudentsForm.value); */
    for(const control in this.StudentsForm.controls){
      if(control) {
        console.log(control);
      }
    }
  }
}
