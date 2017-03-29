import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent {
  @Input()
  public selected: hotelsData;
  @Input()
  public list: hotelsData;
  @Output()
  public clicktoElem: EventEmitter<{}> = new EventEmitter;
  public selectedCountry: string;
}
