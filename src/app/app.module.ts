import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapModule } from './map/map.module';
import { PagesModule } from './pages/pages.module';
import { SharedComponentsModule } from './shared-components/shared-component.module';
import { ModalsModule } from './modals/modals.module';
import { SearchOnMapService } from './services/search-on-map/search-on-map.service';
import { AuthService } from './services/auth/auth.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MapModule,
    HttpClientModule,
    PagesModule,
    SharedComponentsModule,
    ModalsModule
  ],
  providers: [SearchOnMapService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
