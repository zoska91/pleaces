import { PlansService } from 'src/app/services/plans/plans.service';
import { MapComponent } from './../../map/map/map.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Plan } from 'src/app/models/Plan';
import { HistoryService } from 'src/app/services/history.service';

@Component({
  selector: 'app-map-modal',
  templateUrl: './map-modal.component.html',
  styleUrls: ['./map-modal.component.scss']
})
export class MapModalComponent implements OnInit {
  @ViewChild(MapComponent, { static: false }) child: MapComponent;
  constructor(private plans: PlansService, private history: HistoryService) {}

  place: Plan;

  ngOnInit() {}

  findAddress() {
    if (!this.place.lat || !this.place.lon) {
      this.child.search(this.place.adres, null);
    } else {
      const position = `${this.place.lat}, ${this.place.lon}`;
      this.child.search(position, null);
    }
  }

  findPlace(type: string, id: number) {
    console.log(type, id);

    if (type === 'plans') {
      this.plans.getOnePlan(id).subscribe(resp => {
        this.place = resp.plans[0];
        this.findAddress();
      });
    } else if (type === 'history') {
      this.history.getOneHistory(id).subscribe(resp => {
        this.place = resp.history[0];
        this.findAddress();
      });
    }
  }
}
