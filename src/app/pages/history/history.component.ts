import { MapModalComponent } from './../../modals/map-modal/map-modal.component';
import { Component, OnInit, ViewChild } from '@angular/core';

import { HistoryService } from 'src/app/services/history.service';
import { Plan } from 'src/app/models/Plan';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  @ViewChild(MapModalComponent, { static: false }) child: MapModalComponent;

  historyArray: Array<Plan>;
  addHistoryActive: boolean = false;
  showMapActive: boolean = false;

  constructor(private history: HistoryService) {}

  ngOnInit() {
    this.getHistory();
  }

  getHistory(): void {
    this.history.getAllHistory().subscribe(resp => {
      this.historyArray = resp.history;
    });
  }

  toggleAddHistoryForm(): void {
    this.addHistoryActive = !this.addHistoryActive;
  }

  toggleShowMap(id: number): void {
    this.showMapActive = !this.showMapActive;
    if (this.showMapActive) {
      this.child.findPlace('history', id);
    }
  }

  deleteHistory(id: number): void {
    this.history.deleteHistory(id).subscribe(resp => {
      this.getHistory();
    });
  }
}
