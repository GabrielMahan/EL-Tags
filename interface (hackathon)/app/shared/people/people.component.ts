import { Component, OnInit } from '@angular/core';
import { NameListService } from '../name-list/index';
import { HistoryListService } from '../history-list/index';

@Component({
  moduleId: module.id,
  selector: 'sd-people',
  templateUrl: 'people.component.html',
  styleUrls: ['people.component.css'],
})

export class PeopleComponent implements OnInit {
  private floors: any = [];
  
  constructor(public nameListService: NameListService,
              public historyListService: HistoryListService) {}

  ngOnInit() {
    this.getNames();
    setInterval(() => {
      this.getNames();
    }, 5000);
  }
  
  getNames() {
    this.nameListService.get().subscribe((data) => {
      let tempFloors = this.floors;
      this.floors = [];
      for (let key in data) {
        if (!data.hasOwnProperty(key)) continue;
        this.floors[key] = {
          number: key,
          people: data[key]
        };
      }
      this.floors = this.floors.reverse();
      if (tempFloors.length > 0 && JSON.stringify(tempFloors) != JSON.stringify(this.floors)) {
        for (let i = 0; i < this.floors.length; i++) {
          if (JSON.stringify(this.floors[i].people) != JSON.stringify(tempFloors)) {
            let differences = this.floors[i].people
                 .filter(x => tempFloors[i].people.indexOf(x) == -1);
            console.log(differences);
            if (differences.length > 0) {
              differences.forEach((diff) => {
                this.historyListService.addEvent(diff, (3-i));
              });
            }
          }
        }
      }
    });
  }
  
  getFloor(floorNumber) {
    if (floorNumber == 0) {
      return 'INACTIVE';
    } else {
      return floorNumber;
    }
  }
}
