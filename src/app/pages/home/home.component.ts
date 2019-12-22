import { MapComponent } from '../../map/map/map.component';
import { Component, OnInit, ViewChild } from '@angular/core';

import { SearchOnMapService } from '../../services/search-on-map/search-on-map.service';
import { ParamsSearch } from '../../models/ParamsSearch';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild(MapComponent, { static: false }) child: MapComponent;

  paramsSearch: ParamsSearch;

  constructor(private searchOnMap: SearchOnMapService) {}
  ngOnInit() {}

  search(adress: string, country: string) {
    this.searchOnMap.searchPlace(adress, country).subscribe(resp => {
      let zoom: number;
      if (resp.results[0].address.streetName) zoom = 15;
      else zoom = 10;
      this.paramsSearch = {
        lat: resp.results[0].position.lat,
        lon: resp.results[0].position.lon,
        zoom
      };
      this.child.showMap(
        this.paramsSearch.lon,
        this.paramsSearch.lat,
        this.paramsSearch.zoom
      );
    });
  }
}
