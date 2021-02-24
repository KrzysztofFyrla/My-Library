import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {routesSecurity} from './security-routing';
import {SecurityComponent} from './security/security.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from '../material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    SecurityComponent,
    LoginComponent,
    RegisterComponent],
  exports: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routesSecurity),
    FormsModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class SecurityModule {
}
