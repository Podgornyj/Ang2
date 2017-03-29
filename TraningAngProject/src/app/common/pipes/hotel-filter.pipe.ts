import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hotelFilter'
})
export class HotelFilterPipe implements PipeTransform {

  public transform(value: hotelsData[], args?: number): hotelsData[] {
    if (!args) {
      return value;
    }
    return value.filter((item: hotelsData) => item.stars === args);
  }
}
