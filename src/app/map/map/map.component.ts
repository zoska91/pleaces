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

  lat: number = 52.23498;
  lon: number = 21.00849;
  zoom: number = 4;

  ngOnInit() {
    this.showMap();
  }

  showMap() {
    const map = tt.map({
      key: apiKey,
      container: "map",
      style: "tomtom://vector/1/basic-main",
      center: [this.lon, this.lat],
      zoom: this.zoom
    });

    map.addControl(new tt.NavigationControl());
  }

  search(adress: string, country: string) {
    this.searchOnMap.searchPlace(adress, country).subscribe(resp => {
      this.lat = resp.results[0].position.lat;
      this.lon = resp.results[0].position.lon;
      if (resp.results[0].address.streetName) this.zoom = 15;
      else this.zoom = 10;
      this.showMap();
    });
  }
}
