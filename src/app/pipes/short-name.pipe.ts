import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortName'
})
export class ShortNamePipe implements PipeTransform {
  transform(value: string, stringLength: number = 10): any {
    let newValue = value;
    if (value.length > stringLength) {
      newValue = value.slice(0, stringLength) + '...';
    }

    return newValue;
  }
}
