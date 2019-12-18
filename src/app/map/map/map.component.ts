import { Component, OnInit, ViewEncapsulation } from "@angular/core";

import tt from "@tomtom-international/web-sdk-maps";
@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.scss"]
})
export class MapComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const map = tt.map({
      key: "QDSKv20DjAN7ZcBWuAunVkFKFVFUAQ2X",

      container: "map",

      style: "tomtom://vector/1/basic-main"
    });

    map.addControl(new tt.NavigationControl());
  }
}
