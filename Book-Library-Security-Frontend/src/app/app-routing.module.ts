import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {LoginComponent} from './security/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full'
      },
      {
        path: 'auth',
        component: LoginComponent
      },
      {
        path: 'auth',
        loadChildren: () => import('./security/security.module')
          .then(m => m.SecurityModule)
      }
    ]
  },
  {
    path: 'panel',
    loadChildren: () => import('./book-library/book-library.module')
      .then(m => m.BookLibraryModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
