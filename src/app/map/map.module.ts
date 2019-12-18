import { BrowserModule } from "@angular/platform-browser";
import { SearchOnMapService } from "./../search-on-map.service";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MapComponent } from "./map/map.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [MapComponent],
  imports: [CommonModule, HttpClientModule, BrowserModule],
  exports: [MapComponent],
  providers: [SearchOnMapService]
})
export class MapModule {}
