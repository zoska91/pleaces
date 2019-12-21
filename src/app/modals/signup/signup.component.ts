import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, Form } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.signupForm = this.formBuilder.group({
      name: '',
      surname: '',
      email: '',
      password: '',
      adres: ''
    });
  }

  ngOnInit() {}

  onSubmit(data) {
    console.log();
  }
}
