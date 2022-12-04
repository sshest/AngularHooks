import {Component, Inject, Optional, ViewContainerRef} from '@angular/core';
import { UserConfigurationModalService } from './configuration/user-configuration-modal.service';
import {USER_CONFIGURATION_SERVICE} from './configuration/diTokens';
import {UserConfigurationModule} from './configuration/user-configuration.module';
import {BrowserModule} from '@angular/platform-browser';

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [
    UserConfigurationModule,
    BrowserModule
  ]
})
export class HeaderComponent {

  constructor(private readonly viewContainerRef: ViewContainerRef,
              @Optional() @Inject(USER_CONFIGURATION_SERVICE) private userConfigurationModalService: UserConfigurationModalService
  ) {
    console.log('[COMPONENT:STANDALONE:HEADER:CONSTRUCTOR]');
  }

  openConfiguration(): void {
    this.userConfigurationModalService.open(this.viewContainerRef);
  }

}
