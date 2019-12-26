import { Observable } from 'rxjs';
import { NotesService } from './../../services/notes/notes.service';
import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/models/Note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  notesArray: Note[];
  addNoteActive: boolean = false;

  constructor(private notes: NotesService) {}

  ngOnInit() {
    this.getNotes();
  }

  getNotes() {
    this.notes.getAllNotes().subscribe(resp => {
      console.log(resp);
      this.notesArray = resp.notes;
      console.log(this.notesArray);
    });
  }

  toggleAddNoteForm() {
    this.addNoteActive = !this.addNoteActive;
  }
}
