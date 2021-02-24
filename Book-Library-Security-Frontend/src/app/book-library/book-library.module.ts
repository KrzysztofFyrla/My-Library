import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BookLibraryRoutingModule} from './book-library-routing.module';
import {BookLibraryComponent} from './book-library/book-library.component';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from '../material.module';
import {BookLibraryAddComponent} from './book-library-add/book-library-add.component';
import {BookLibraryEditComponent} from './book-library-edit/book-library-edit.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BookLibraryTilesComponent} from './book-library-tiles/book-library-tiles.component';
import { BookLibraryReservationComponent } from './book-library-reservation/book-library-reservation.component';
import { BookReservationListComponent } from './book-reservation-list/book-reservation-list.component';
import {BookSettingsModule} from './book-settings/book-settings.module';
import { BookComponent } from './book/book.component';

@NgModule({
  declarations: [
    BookLibraryComponent,
    BookLibraryAddComponent,
    BookLibraryEditComponent,
    BookLibraryTilesComponent,
    BookLibraryReservationComponent,
    BookReservationListComponent,
    BookComponent
  ],
  imports: [
    CommonModule,
    BookLibraryRoutingModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    BookSettingsModule
  ]
})
export class BookLibraryModule {
}
