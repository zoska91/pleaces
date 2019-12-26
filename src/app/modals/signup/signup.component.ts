import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from './../../models/User';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  user: User;
  error: string;

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    this.signupForm = this.createUserForm();
  }

  ngOnInit() {}

  createUserForm() {
    return this.formBuilder.group({
      name: [''],
      surname: '',
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      adres: ['', Validators.maxLength(50)]
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      const { email, password } = this.signupForm.value;
      console.log(this.signupForm.value);
      this.auth.signupUser(this.signupForm.value).subscribe(resp => {
        console.log(resp);
        if (resp.message === 'created') {
          this.auth.loginUser(email, password).subscribe(resp => {
            localStorage.setItem('login', resp.token);
            this.auth.isLogin = true;
            this.router.navigate(['/plans']);
          });
        } else {
          this.error = resp.message;
          console.log(this.error);
        }
      });
    } else console.log('valid');
  }
}
