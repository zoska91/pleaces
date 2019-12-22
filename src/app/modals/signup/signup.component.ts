import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from './../../models/User';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  user: User;

  constructor(private formBuilder: FormBuilder) {
    this.signupForm = this.createUserForm();
  }

  ngOnInit() {}

  createUserForm() {
    return this.formBuilder.group({
      name: ['', Validators.required],
      surname: '',
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      adres: ['', Validators.maxLength(50)]
    });
  }

  onSubmit() {
    console.log();

    if (this.signupForm.valid)
      console.log('tu bedzie post', this.signupForm.value);
    else console.log('valid');
  }
}
