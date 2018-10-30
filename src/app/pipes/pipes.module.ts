import {NgModule} from '@angular/core';
import {FormatNumberPipe} from '@app/pipes/format-number.pipe';
import {FormatDatePipe} from './format-date.pipe';

@NgModule({
  declarations: [
    FormatNumberPipe,
    FormatDatePipe
  ],
  exports: [
    FormatNumberPipe,
    FormatDatePipe
  ]
})
export class PipesModule {
}
