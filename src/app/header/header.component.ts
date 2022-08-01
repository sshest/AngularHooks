import { Component, ViewContainerRef } from '@angular/core';
import { UserConfigurationModalService } from './configuration/user-configuration-modal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(private readonly viewContainerRef: ViewContainerRef,
              private readonly modalService: UserConfigurationModalService) {}

  openConfiguration(): void {
    this.modalService.open(this.viewContainerRef);
  }

}
