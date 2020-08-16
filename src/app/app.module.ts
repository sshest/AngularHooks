import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {GdprModule} from './gdpr/gdpr.module';
import { ModalComponent } from './gdpr/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    GdprModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
