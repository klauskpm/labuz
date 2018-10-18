import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgRapiModule} from 'ng-rapi';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgRapiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
