import {Component, Inject, ViewContainerRef} from '@angular/core';
import { UserConfigurationModalService } from './configuration/user-configuration-modal.service';
import {USER_CONFIGURATION_SERVICE} from './configuration/diTokens';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(private readonly viewContainerRef: ViewContainerRef,
              @Inject(USER_CONFIGURATION_SERVICE) private userConfigurationModalService: UserConfigurationModalService) {}

  openConfiguration(): void {
    this.userConfigurationModalService.open(this.viewContainerRef);
  }

}
