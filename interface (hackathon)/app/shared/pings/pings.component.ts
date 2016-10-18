import { Component, OnInit } from '@angular/core';
import { NameListService } from '../name-list/index';
import { HistoryListService } from '../history-list/index';

@Component({
  moduleId: module.id,
  selector: 'sd-pings',
  templateUrl: 'pings.component.html',
  styleUrls: ['pings.component.css'],
})

export class PingsComponent implements OnInit {
  private floors: any = [false, false, false];
  private sub: any;
  
  constructor(public historyListService: HistoryListService) {}
  
  ngOnInit() {
    this.sub = this.historyListService.onNewEvent.subscribe((floor) => {
      this.floors[3-floor] = true;
      setTimeout(() => {
        this.floors[3-floor] = false;
      }, 5000);
    });
  }
}
