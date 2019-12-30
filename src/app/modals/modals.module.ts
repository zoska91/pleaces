import { MapModule } from './../map/map.module';
import { NotesService } from './../services/notes/notes.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { OneNoteComponent } from './one-note/one-note.component';
import { MapModalComponent } from './map-modal/map-modal.component';
import { AddPlanComponent } from './add-plan/add-plan.component';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    AddNoteComponent,
    OneNoteComponent,
    MapModalComponent,
    AddPlanComponent
  ],
  imports: [CommonModule, ReactiveFormsModule, MapModule],
  exports: [
    LoginComponent,
    SignupComponent,
    AddNoteComponent,
    OneNoteComponent,
    AddPlanComponent,
    MapModalComponent
  ],
  providers: [NotesService]
})
export class ModalsModule {}
