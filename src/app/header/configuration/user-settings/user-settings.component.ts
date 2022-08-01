import { Component, OnInit } from '@angular/core';
import { UserConfigurationModalService } from '../user-configuration-modal.service';
import { SettingsStoreService } from '../../../platform/settings-store.service';
import { Widget } from '../../../platform/widget';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html'
})
export class UserConfigurationComponent implements OnInit {

  activeWidget: Widget;

  constructor(private readonly modalService: UserConfigurationModalService,
              private readonly storeService: SettingsStoreService) {}

  ngOnInit(): void {
    this.activeWidget = this.storeService.getWidget();
  }

  activeWidgetActive(option): boolean {
    return option === this.activeWidget;
  }

  setWidget(widget: string): void {
    localStorage.setItem('widget', widget);
  }

  saveChanges(): void {
    location.reload();
  }

  close(): void {
    this.modalService.close();
  }

}
