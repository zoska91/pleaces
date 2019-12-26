import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MapModule } from '../map/map.module';
import { BrowserModule } from '@angular/platform-browser';
import { NotesComponent } from './notes/notes.component';
import { PlansComponent } from './plans/plans.component';
import { HistoryComponent } from './history/history.component';
import { RoadsComponent } from './roads/roads.component';
import { ModalsModule } from '../modals/modals.module';

@NgModule({
  declarations: [
    HomeComponent,
    NotesComponent,
    PlansComponent,
    HistoryComponent,
    RoadsComponent
  ],
  imports: [
    CommonModule,
    MapModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ModalsModule
  ],
  exports: [
    HomeComponent,
    NotesComponent,
    PlansComponent,
    HistoryComponent,
    RoadsComponent
  ]
})
export class PagesModule {}
