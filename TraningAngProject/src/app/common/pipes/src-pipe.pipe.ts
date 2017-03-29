import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'srcPipe'
})
export class SrcPipePipe implements PipeTransform {

 public transform(id: number): string {
    return `assets/images/resort${id}.jpg`;
  }

}
