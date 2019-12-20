import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  isMenuVisible: boolean = false;
  isLogin: boolean = false;
  constructor() {}

  ngOnInit() {}

  toggleNav() {
    this.isMenuVisible = !this.isMenuVisible;
  }
}
