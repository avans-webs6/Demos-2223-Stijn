import { Component } from '@angular/core';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent {

  public events: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.events = [
      { name: "Lan party 1", "date": "2020-10-10", "time": "20:00", "location": "Groningen", bannerUri: "https://static.vecteezy.com/system/resources/previews/009/827/570/original/geometric-banner-design-for-event-website-and-mobile-or-desktop-applications-free-vector.jpg" },
      { name: "Lan party 2", "date": "2020-10-10", "time": "20:00", "location": "Groningen", bannerUri: "https://static.vecteezy.com/system/resources/previews/009/827/570/original/geometric-banner-design-for-event-website-and-mobile-or-desktop-applications-free-vector.jpg" },
      { name: "Lan party 3", "date": "2020-10-10", "time": "20:00", "location": "Groningen", bannerUri: "https://static.vecteezy.com/system/resources/previews/009/827/570/original/geometric-banner-design-for-event-website-and-mobile-or-desktop-applications-free-vector.jpg" },

    ]
  }


}
