import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import {BrowserModule} from '@angular/platform-browser';
import {UserConfigurationModule} from './configuration/user-configuration.module';

@NgModule({
  declarations: [HeaderComponent],
  bootstrap: [HeaderComponent],
  imports: [
    UserConfigurationModule,
    BrowserModule
  ]
})
export class HeaderModule { }
