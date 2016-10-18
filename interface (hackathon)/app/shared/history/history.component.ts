import { Component, OnInit } from '@angular/core';
import { HistoryListService } from '../history-list/index';

@Component({
  moduleId: module.id,
  selector: 'sd-history',
  templateUrl: 'history.component.html',
  styleUrls: ['history.component.css'],
})

export class HistoryComponent implements OnInit {
  constructor(public historyListService: HistoryListService) {}

  ngOnInit() {
  }
}
