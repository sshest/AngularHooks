import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserConfigurationComponent } from './user-configuration-modal/user-configuration.component';
import {UserConfigurationModalService} from './user-configuration-modal.service';
import {USER_CONFIGURATION_SERVICE} from './diTokens';



@NgModule({
  declarations: [UserConfigurationComponent],
  entryComponents: [UserConfigurationComponent],
  imports: [
    CommonModule
  ],
  providers: [{
    provide: USER_CONFIGURATION_SERVICE,
    useClass: UserConfigurationModalService
  }]
})
export class UserConfigurationModule { }
