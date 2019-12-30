import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PlansService } from 'src/app/services/plans/plans.service';

@Component({
  selector: 'app-add-plan',
  templateUrl: './add-plan.component.html',
  styleUrls: ['./add-plan.component.scss']
})
export class AddPlanComponent implements OnInit {
  @Output() toggle: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
  @Output() getPlans: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
  addPlanForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private plans: PlansService) {
    this.addPlanForm = this.createAddPlanForm();
  }

  ngOnInit() {}

  createAddPlanForm() {
    return this.formBuilder.group({
      planTitle: ['', Validators.required],
      planHistoryId: '',
      planPlanId: '',
      planRoadId: '',
      planText: ['', Validators.maxLength(500)],
      planAdres: ['', Validators.maxLength(500)],
      planLon: '',
      planLat: ''
    });
  }

  onSubmit() {
    if (this.addPlanForm.valid) {
      this.plans.addPlan(this.addPlanForm.value).subscribe(resp => {
        if (resp.message === 'created') {
          console.log(resp.message);
          this.addPlanForm.reset();
          this.toggle.emit();
          this.getPlans.emit();
        }
      });
    } else console.log('valid');
  }
}
