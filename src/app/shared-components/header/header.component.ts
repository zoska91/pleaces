import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isMenuVisible: boolean = false;
  isLoginVisible: boolean = false;
  isSinginVisible: boolean = false;
  isLogin: boolean = false;
  constructor() {}

  ngOnInit() {}

  toggleNav() {
    if (this.isLoginVisible || this.isSinginVisible) {
      this.isLoginVisible = false;
      this.isSinginVisible = false;
    }
    this.isMenuVisible = !this.isMenuVisible;
  }
  toggleLogin() {
    if (this.isMenuVisible) this.isMenuVisible = false;
    this.isLoginVisible = !this.isLoginVisible;
  }
  toggleSingin() {
    if (this.isMenuVisible) this.isMenuVisible = false;
    this.isSinginVisible = !this.isSinginVisible;
  }
}
