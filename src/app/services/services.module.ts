import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AuthService } from './auth/auth.service';
import { SearchOnMapService } from './search-on-map/search-on-map.service';

@NgModule({
  declarations: [SearchOnMapService],
  imports: [CommonModule, HttpClientModule, BrowserModule],
  exports: [SearchOnMapService],
  providers: [SearchOnMapService, AuthService]
})
export class ServicesModule {}
