import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BookLibraryAddComponent} from './book-library-add/book-library-add.component';
import {BookLibraryEditComponent} from './book-library-edit/book-library-edit.component';
import {BookLibraryTilesComponent} from './book-library-tiles/book-library-tiles.component';
import {BookLibraryReservationComponent} from './book-library-reservation/book-library-reservation.component';
import {BookReservationListComponent} from './book-reservation-list/book-reservation-list.component';
import {BookLibraryComponent} from './book-library/book-library.component';
import {BookComponent} from './book/book.component';

const routes: Routes = [
  {
    path: '',
    component: BookComponent,
    children: [
      {
        path: '',
        redirectTo: 'book',
        pathMatch: 'full'
      },
      {
        path: 'book',
        component: BookLibraryComponent
      },
      {
        path: 'book-add',
        component: BookLibraryAddComponent
      },
      {
        path: 'book-edit/:id',
        component: BookLibraryEditComponent
      },
      {
        path: 'books-view',
        component: BookLibraryTilesComponent
      },
      {
        path: 'books-reservation',
        component: BookReservationListComponent
      },
      {
        path: 'book-reservation/:id',
        component: BookLibraryReservationComponent
      },
      {
        path: 'book-setting',
        loadChildren: () => import('./book-settings/book-settings.module')
          .then(m => m.BookSettingsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookLibraryRoutingModule {
}
