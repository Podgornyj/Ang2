import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public hotelList: [hotelsData] = [
    {
      id: 0,
      city: 'Portu',
      country: 'Portugal',
      temperature: 25,
      phone: '+380 67 123 55 77',
      followers: 145,
      following: 43
    },
    {
      id: 1,
      city: 'Lisbon',
      country: 'Portugal',
      temperature: 22,
      phone: '+380 97 456 67 72',
      followers: 355,
      following: 45
    },
    {
      id: 2,
      city: 'Barcelona',
      country: 'Spain',
      temperature: 29,
      phone: '+380 63 569 00 14',
      followers: 1754,
      following: 555
    },
    {
      id: 3,
      city: 'Valencia',
      country: 'Spain',
      temperature: 27,
      phone: '+380 68 748 98 24',
      followers: 343,
      following: 46
    }
  ];

  public selectedResort: hotelsData = this.hotelList[0];

  public photoUrl: string = `assets/images/resort${this.selectedResort.id}.jpg`;
}
