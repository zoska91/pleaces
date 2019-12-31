import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HistoryService } from 'src/app/services/history.service';

@Component({
  selector: 'app-add-history',
  templateUrl: './add-history.component.html',
  styleUrls: ['./add-history.component.scss']
})
export class AddHistoryComponent implements OnInit {
  @Output() toggle: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
  @Output() getHistory: EventEmitter<MouseEvent> = new EventEmitter<
    MouseEvent
  >();
  addHistoryForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private history: HistoryService
  ) {
    this.addHistoryForm = this.createAddHistoryForm();
  }

  ngOnInit() {}

  createAddHistoryForm() {
    return this.formBuilder.group({
      historyTitle: ['', Validators.required],
      historyText: ['', Validators.maxLength(500)],
      historyAdres: ['', Validators.maxLength(500)],
      historyLon: '',
      historyLat: ''
    });
  }

  onSubmit() {
    if (this.addHistoryForm.valid) {
      this.history.addHistory(this.addHistoryForm.value).subscribe(resp => {
        if (resp.message === 'created') {
          console.log(resp.message);
          this.addHistoryForm.reset();
          this.toggle.emit();
          this.getHistory.emit();
        }
      });
    } else console.log('valid');
  }
}
