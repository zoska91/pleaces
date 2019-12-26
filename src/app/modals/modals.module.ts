import { NotesService } from './../services/notes/notes.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { AddNoteComponent } from './add-note/add-note.component';

@NgModule({
  declarations: [LoginComponent, SignupComponent, AddNoteComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [LoginComponent, SignupComponent, AddNoteComponent],
  providers: [NotesService]
})
export class ModalsModule {}
