import { BrowserModule } from "@angular/platform-browser";
import { SearchOnMapService } from "./../search-on-map.service";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { MapComponent } from "./map/map.component";

@NgModule({
  declarations: [MapComponent],
  imports: [CommonModule, HttpClientModule, BrowserModule, FormsModule],
  exports: [MapComponent],
  providers: [SearchOnMapService]
})
export class MapModule {}
