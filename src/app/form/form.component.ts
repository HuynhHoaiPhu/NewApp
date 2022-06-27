import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  name = new FormControl('');
  age = new FormControl('');
  constructor() { }

  ngOnInit(): void {
  }
  UpdateName() {
    this.name.setValue('Nancy');
  }
  UpdateAge() {
    this.age.setValue('15');
  }
  // Code test Form Group
profileForm = new FormGroup(
  {
    firstName : new FormControl('', Validators.required),
    lastName : new FormControl('', Validators.required),
    Age: new FormControl('', Validators.required),
    address: new FormGroup({
      street: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required)
    })

  }
)
  onSubmit() {
    console.log(this.profileForm.value);
  }
}

