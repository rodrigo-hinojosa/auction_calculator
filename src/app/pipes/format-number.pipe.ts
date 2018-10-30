import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'formatNumber'
})
export class FormatNumberPipe implements PipeTransform {

  transform(value: any, format: string = 'normal'): string {

    if (this.isFloat(value) && format === 'normal') {

      return value.toFixed(2).toLocaleString();

    } else if (this.isInt(value) && format === 'normal') {

      value = String(value).replace(/\D/g, '');
      return value === '' ? value : Number(value).toLocaleString();

    } else if (format === 'round') {

      value = String(value.toFixed()).replace(/\D/g, '');
      return value === '' ? value : Number(value).toLocaleString();

    } else {

      return value;

    }

  }

  private isInt(n) {
    return Number(n) === n && n % 1 === 0;
  }

  private isFloat(n) {
    return Number(n) === n && n % 1 !== 0;
  }

}
