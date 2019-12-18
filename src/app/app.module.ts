import { SearchOnMapService } from "./search-on-map.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MapModule } from "./map/map.module";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, MapModule, HttpClientModule],
  providers: [SearchOnMapService],
  bootstrap: [AppComponent]
})
export class AppModule {}
