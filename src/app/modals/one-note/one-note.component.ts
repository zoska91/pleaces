import { Note } from './../../models/Note';
import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { NotesService } from 'src/app/services/notes/notes.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-one-note',
  templateUrl: './one-note.component.html',
  styleUrls: ['./one-note.component.scss']
})
export class OneNoteComponent implements OnInit {
  @Output() toggle: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
  @Output() getNotes: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
  @Input() oneNote: Note;
  editNoteForm: FormGroup;
  noteId: number;

  constructor(private formBuilder: FormBuilder, private notes: NotesService) {
    this.editNoteForm = this.createEditNoteForm();
  }

  ngOnInit() {}

  createEditNoteForm() {
    return this.formBuilder.group({
      editNoteTitle: [
        this.oneNote ? this.oneNote.title : '',
        Validators.required
      ],
      editNoteHistoryId: '',
      editNotePlanId: '',
      editNoteRoadId: '',
      editNoteText: [
        this.oneNote ? this.oneNote.text : '',
        Validators.maxLength(500)
      ]
    });
  }

  getOneNote(id: number) {
    this.noteId = id;
    this.notes.getOneNote(id).subscribe(resp => {
      this.oneNote = resp.notes[0];
      // console.log(resp);
      console.log(this.oneNote);
      this.editNoteForm = this.createEditNoteForm();
      this.toggle.emit();
    });
  }

  onSubmit() {
    if (this.editNoteForm.valid) {
      this.notes
        .updateNote(this.editNoteForm.value, this.noteId)
        .subscribe(resp => {});
    } else console.log('valid');
    this.toggle.emit();
    this.getNotes.emit();
  }
}
