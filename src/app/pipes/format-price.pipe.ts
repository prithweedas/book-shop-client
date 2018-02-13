import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPrice'
})
export class FormatPricePipe implements PipeTransform {
  transform(value: string, formated = true, starting = '₹', ending = ''): any {
    let val: any = parseFloat(value);
    if (formated && val >= 1000000) val = (val / 1000000).toFixed(1) + 'M';
    else if (formated && val >= 1000) val = (val / 1000).toFixed(1) + 'K';
    return starting + val.toLocaleString() + ending;
  }
}
