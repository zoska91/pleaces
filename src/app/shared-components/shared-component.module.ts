import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { ModalsModule } from '../modals/modals.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NotLoginComponent } from './not-login/not-login.component';

@NgModule({
  declarations: [HeaderComponent, NotLoginComponent],
  imports: [
    CommonModule,
    RouterModule,
    ModalsModule,
    HttpClientModule,
    BrowserModule,
    FormsModule
  ],
  exports: [HeaderComponent, NotLoginComponent]
})
export class SharedComponentsModule {}
