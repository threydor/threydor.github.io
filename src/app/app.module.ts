import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {registerLocaleData} from '@angular/common';
import LocalePl from '@angular/common/locales/pl';
import { SafePipe } from './core/pipes/safe.pipe';

registerLocaleData(LocalePl, 'pl-PL');

@NgModule({
  declarations: [
    AppComponent,
    SafePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pl-PL'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
