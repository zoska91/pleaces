import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { ModalsModule } from '../modals/modals.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, RouterModule, ModalsModule],
  exports: [HeaderComponent]
})
export class SharedComponentsModule {}
