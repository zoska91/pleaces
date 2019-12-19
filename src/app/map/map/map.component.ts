import { SearchOnMapService } from "./../../search-on-map.service";
import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { API_Kay_TOM_TOM as apiKey } from "../../../../config";

import tt from "@tomtom-international/web-sdk-maps";
@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.scss"]
})
export class MapComponent implements OnInit {
  constructor(private searchOnMap: SearchOnMapService) {}

  ngOnInit() {
    const map = tt.map({
      key: apiKey,
      container: "map",
      style: "tomtom://vector/1/basic-main",
      center: [17.02407, 51.08315],
      zoom: 15
    });

    map.addControl(new tt.NavigationControl());
    this.search();
  }
  search() {
    this.searchOnMap.searchPlace().subscribe(resp => {
      console.log(resp);
    });
  }
}
