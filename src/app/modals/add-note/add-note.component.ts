import { EventEmitter } from '@angular/core';
import { NotesService } from './../../services/notes/notes.service';
import { Component, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  MaxLengthValidator
} from '@angular/forms';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {
  @Output() toggle: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
  @Output() getNotes: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
  addNoteForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private notes: NotesService) {
    this.addNoteForm = this.createAddNoteForm();
  }

  ngOnInit() {}

  createAddNoteForm() {
    return this.formBuilder.group({
      noteTitle: ['', Validators.required],
      noteHistoryId: '',
      notePlanId: '',
      noteRoadId: '',
      noteText: ['', Validators.maxLength(500)]
    });
  }

  onSubmit() {
    if (this.addNoteForm.valid) {
      this.notes.addNote(this.addNoteForm.value).subscribe(resp => {
        if (resp.message === 'created') {
          this.addNoteForm.reset();
          this.toggle.emit();
          this.getNotes.emit();
        }
      });
    } else console.log('valid');
  }
}
