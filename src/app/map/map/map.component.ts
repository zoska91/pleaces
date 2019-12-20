import { Component, OnInit, EventEmitter } from "@angular/core";
import { API_Kay_TOM_TOM as apiKey } from "../../../../config";

import tt from "@tomtom-international/web-sdk-maps";
import { ParamsSearch } from "./../../models/ParamsSearch";

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.scss"]
})
export class MapComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    // this.showMapWithTraffic();
    this.showMap(21.00849, 52.23498, 4);
  }

  showMap(lon: number, lat: number, zoom: number) {
    const el = <HTMLElement>document.querySelector("#map");
    el.innerHTML = "";
    const map = tt.map({
      key: apiKey,
      container: "map",
      style: "tomtom://vector/1/basic-main",
      center: [lon, lat],
      zoom: zoom,
      layers: 1
    });

    map.addControl(new tt.NavigationControl());
  }

  showMapWithTraffic() {
    const map = tt.map({
      key: apiKey,
      container: "map",
      style: "tomtom://vector/1/basic-main",
      center: [-0.12634, 51.50276],
      zoom: 10
    });

    const config = {
      key: apiKey,
      style: "tomtom://vector/1/relative",
      refresh: 30000
    };

    map.on("load", function() {
      map.addTier(new tt.TrafficFlowTilesTier(config));
    });
  }
}
