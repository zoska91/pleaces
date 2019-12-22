import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchOnMapService } from './search-on-map.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [SearchOnMapService],
  imports: [CommonModule, HttpClientModule, BrowserModule],
  exports: [SearchOnMapService],
  providers: [SearchOnMapService]
})
export class ServicesModule {}
