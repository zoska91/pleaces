import { Observable } from 'rxjs';
import { NotesService } from './../../services/notes/notes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  notesArray: object;

  constructor(private notes: NotesService) {}

  ngOnInit() {
    this.getNotes();
  }

  getNotes() {
    this.notes.getAllNotes().subscribe(resp => {
      console.log(resp);
    });
  }
}
