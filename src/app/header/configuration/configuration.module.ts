import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserConfigurationComponent } from './user-settings/user-settings.component';



@NgModule({
  declarations: [UserConfigurationComponent],
  entryComponents: [UserConfigurationComponent],
  imports: [
    CommonModule
  ]
})
export class ConfigurationModule { }
