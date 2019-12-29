import { Component, OnInit } from '@angular/core';

import { PlansService } from 'src/app/services/plans/plans.service';
import { Plan } from 'src/app/models/Plan';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent implements OnInit {
  plansArray: Array<Plan>;

  constructor(private plans: PlansService) {}

  ngOnInit() {
    this.getPlans();
  }

  getPlans() {
    this.plans.getAllPlans().subscribe(resp => {
      console.log(resp);
      this.plansArray = resp.plans;
    });
  }
}
