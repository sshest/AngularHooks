import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import {BrowserModule} from '@angular/platform-browser';
import {ConfigurationModule} from './configuration/configuration.module';

@NgModule({
  declarations: [HeaderComponent],
  bootstrap: [HeaderComponent],
  imports: [
    ConfigurationModule,
    BrowserModule
  ]
})
export class HeaderModule { }
