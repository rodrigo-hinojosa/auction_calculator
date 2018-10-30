import {Pipe, PipeTransform} from '@angular/core';

import * as moment from 'moment';

@Pipe({
  name: 'formatDate',
  pure: false
})
export class FormatDatePipe implements PipeTransform {

  transform(value: any, outputFormat: string = 'relative',
            inputFormat: string = 'DD-MM-YYYY hh:mm:ss',
            locale: string = 'es'): any {

    moment.locale(locale);

    const output = outputFormat !== 'relative' ?
      moment(value, inputFormat).format(outputFormat) :
      moment(value, inputFormat).fromNow();

    return output;
  }

}
