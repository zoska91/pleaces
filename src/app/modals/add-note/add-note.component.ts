import { NotesService } from './../../services/notes/notes.service';
import { Component, OnInit } from '@angular/core';
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
      console.log(this.addNoteForm.value);
      console.log('ok');
      this.notes.addNote(this.addNoteForm.value).subscribe(resp => {
        if (resp.message === 'created') {
          console.log(resp.message);
          this.addNoteForm.reset();
        }
      });
    } else console.log('valid');
  }
}
