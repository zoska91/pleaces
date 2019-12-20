import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { MapModule } from "./../map/map.module";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MapModule,
    HttpClientModule,
    BrowserModule,
    FormsModule
  ],
  exports: [HomeComponent]
})
export class HomeModule {}
