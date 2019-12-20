import { SearchOnMapService } from "./search-on-map.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MapModule } from "./map/map.module";
import { PagesModule } from "./pages/pages.module";
import { SharedComponentsModule } from "./shared-components/shared-component.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MapModule,
    HttpClientModule,
    PagesModule,
    SharedComponentsModule
  ],
  providers: [SearchOnMapService],
  bootstrap: [AppComponent]
})
export class AppModule {}
