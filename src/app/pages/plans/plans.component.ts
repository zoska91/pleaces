import { MapModalComponent } from './../../modals/map-modal/map-modal.component';
import { Component, OnInit, ViewChild } from '@angular/core';

import { PlansService } from 'src/app/services/plans/plans.service';
import { Plan } from 'src/app/models/Plan';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent implements OnInit {
  @ViewChild(MapModalComponent, { static: false }) child: MapModalComponent;

  plansArray: Array<Plan>;
  addPlanActive: boolean = false;
  showMapActive: boolean = false;

  constructor(private plans: PlansService) {}

  ngOnInit() {
    this.getPlans();
  }

  getPlans(): void {
    this.plans.getAllPlans().subscribe(resp => {
      console.log(resp);
      this.plansArray = resp.plans;
    });
  }

  toggleAddPlanForm(): void {
    this.addPlanActive = !this.addPlanActive;
  }

  toggleShowMap(id: number): void {
    this.showMapActive = !this.showMapActive;
    if (this.showMapActive) {
      this.child.findPlace(id);
    }
  }

  deletePlan(id: number): void {
    this.plans.deletePlan(id).subscribe(resp => {
      console.log(resp);
      this.getPlans();
    });
  }
}
