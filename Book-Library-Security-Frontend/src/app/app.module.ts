import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {MaterialModule} from './material.module';
import {BookLibraryModule} from './book-library/book-library.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    BookLibraryModule
  ],
  providers: [],
  exports: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
