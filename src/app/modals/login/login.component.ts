import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Resp } from '../../models/Resp';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  login: Resp;
  error: string;

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
      emailLogin: ['', Validators.required],
      passwordLogin: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { emailLogin, passwordLogin } = this.loginForm.value;
      console.log(this.loginForm.value);
      this.auth.loginUser(emailLogin, passwordLogin).subscribe(resp => {
        console.log(resp);
        if (resp.message === 'successful') {
          localStorage.setItem('login', resp.token);
          this.auth.isLogin = true;
          this.router.navigate(['/plans']);
        } else {
          this.error = resp.message;
          console.log(this.error);
        }
      });
    } else console.log('valid');
  }
}
