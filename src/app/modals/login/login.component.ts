import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Login } from '../../models/Login';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  login: Login;

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    this.loginForm = this.createLoginForm();
  }

  ngOnInit() {}

  createLoginForm() {
    return this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      console.log(this.loginForm.value);
      this.auth.loginUser(email, password).subscribe(resp => {
        if (resp.message === 'successful') {
          localStorage.setItem('login', resp.token);
          this.auth.isLogin = true;
          this.router.navigate(['/plans']);
        }
      });
    } else console.log('valid');
  }
}
