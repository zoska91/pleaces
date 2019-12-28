import { OneNoteComponent } from './../../modals/one-note/one-note.component';
import { Observable } from 'rxjs';
import { NotesService } from './../../services/notes/notes.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Note } from 'src/app/models/Note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  @ViewChild(OneNoteComponent, { static: false }) child: OneNoteComponent;
  notesArray: Note[];
  addNoteActive: boolean = false;
  oneNoteActive: boolean = false;
  oneNote: Note;

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

  getNoteId(id: number) {
    this.child.getOneNote(id);
  }

  deleteNote(id: number): void {
    this.notes.deleteNote(id).subscribe(resp => {
      console.log(resp);
      this.getNotes();
    });
  }

  toggleAddNoteForm(event: MouseEvent) {
    this.addNoteActive = !this.addNoteActive;
  }

  toggleOneNote(event: MouseEvent) {
    this.oneNoteActive = !this.oneNoteActive;
  }
}

//TODO child can toggleAddNoreForm and getNotes
