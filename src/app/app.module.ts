import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {
  MatCardModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatSnackBarModule,
  MatIconModule,
  MatButtonModule,
  MatSlideToggleModule,
  MatMenuModule,
  MatTableModule,
  MatToolbarModule,
  MatDividerModule,
  MatSortModule,
  MatPaginatorModule,
  MatPaginatorIntl,
  MatProgressSpinnerModule
} from '@angular/material';

import {FlexLayoutModule} from '@angular/flex-layout';

import {ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';

import {PipesModule} from '@app/pipes/pipes.module';

import {CustomMatPaginatorIntl} from '@app/Internationalization/custom-mat-paginator-intl';

import {MainComponent} from './components/main/main.component';
import {HistoryComponent} from './components/main/history/history.component';
import {ShowComponent} from './components/main/show/show.component';
import {DeleteComponent} from './components/main/delete/delete.component';
import {EditComponent} from './components/main/edit/edit.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HistoryComponent,
    ShowComponent,
    DeleteComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    PipesModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSnackBarModule,
    MatIconModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatTableModule,
    MatToolbarModule,
    MatDividerModule,
    MatSortModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    {
      provide: MatPaginatorIntl,
      useClass: CustomMatPaginatorIntl
    }
  ],
  entryComponents: [
    ShowComponent,
    DeleteComponent,
    EditComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
