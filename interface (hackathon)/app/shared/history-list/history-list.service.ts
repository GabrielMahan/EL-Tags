import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class HistoryListService {
  @Output() onNewEvent = new EventEmitter():
  private _events: any = [];
  
  get events() {
    return this._events;
  }
  
  addEvent(person, floor) {
    this._events.unshift({
      timestamp: this.getTimestamp(),
      text: person + ' scanned on floor ' + floor
    });
    this.onNewEvent.emit(floor);
  }
  
  private getTimestamp() {
    let date = new Date();
    return (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
  }
}