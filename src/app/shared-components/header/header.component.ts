import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isMenuVisible: boolean = false;
  isLoginVisible: boolean = false;
  isSignupVisible: boolean = false;
  isLogin: boolean = false;

  constructor(private router: Router, public auth: AuthService) {}

  ngOnInit() {}

  toggleNav() {
    if (this.isLoginVisible || this.isSignupVisible) {
      this.isLoginVisible = false;
      this.isSignupVisible = false;
    }
    this.isMenuVisible = !this.isMenuVisible;
  }
  toggleLogin() {
    if (this.isMenuVisible || this.isSignupVisible) {
      this.isSignupVisible = false;
      this.isMenuVisible = false;
    }
    this.isLoginVisible = !this.isLoginVisible;
  }
  toggleSignup() {
    if (this.isMenuVisible || this.isLoginVisible) {
      this.isLoginVisible = false;
      this.isMenuVisible = false;
    }
    this.isSignupVisible = !this.isSignupVisible;
  }

  logout(): void {
    localStorage.removeItem('login');
    this.auth.isLogin = false;
    this.isLoginVisible = false;
    this.isSignupVisible = false;
    this.router.navigate(['/']);
  }
}
