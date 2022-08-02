import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserConfigurationComponent } from './user-configuration-modal/user-configuration.component';



@NgModule({
  declarations: [UserConfigurationComponent],
  entryComponents: [UserConfigurationComponent],
  imports: [
    CommonModule
  ]
})
export class UserConfigurationModule { }
