import { NotesService } from './../services/notes/notes.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { OneNoteComponent } from './one-note/one-note.component';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    AddNoteComponent,
    OneNoteComponent
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [
    LoginComponent,
    SignupComponent,
    AddNoteComponent,
    OneNoteComponent
  ],
  providers: [NotesService]
})
export class ModalsModule {}
