import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MapComponent } from './map/map.component';
import { SearchOnMapService } from '../services/search-on-map/search-on-map.service';

@NgModule({
  declarations: [MapComponent],
  imports: [CommonModule, HttpClientModule, BrowserModule, FormsModule],
  exports: [MapComponent],
  providers: [SearchOnMapService]
})
export class MapModule {}
