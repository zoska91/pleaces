import { PlansService } from 'src/app/services/plans/plans.service';
import { MapComponent } from './../../map/map/map.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Plan } from 'src/app/models/Plan';

@Component({
  selector: 'app-map-modal',
  templateUrl: './map-modal.component.html',
  styleUrls: ['./map-modal.component.scss']
})
export class MapModalComponent implements OnInit {
  @ViewChild(MapComponent, { static: false }) child: MapComponent;
  constructor(private plans: PlansService) {}

  plan: Plan;

  ngOnInit() {}

  findPlace(id: number) {
    console.log(id);
    this.plans.getOnePlan(id).subscribe(resp => {
      this.plan = resp.plans[0];
      console.log(resp);
      console.log(this.plan);
      if (!this.plan.lat || !this.plan.lon) {
        console.log('not lon');
        this.child.search(this.plan.adres, null);
      } else {
        const position = `${this.plan.lat}, ${this.plan.lon}`;
        this.child.search(position, null);
      }
    });
  }
}
