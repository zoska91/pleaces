import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { ModalsModule } from '../modals/modals.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    ModalsModule,
    HttpClientModule,
    BrowserModule,
    FormsModule
  ],
  exports: [HeaderComponent]
})
export class SharedComponentsModule {}
