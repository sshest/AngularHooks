import { Component, OnInit } from '@angular/core';
import { UserConfigurationModalService } from '../user-configuration-modal.service';
import { SettingsStoreService } from '../../../platform/settings-store.service';
import { Widget } from '../../../platform/widget';
import {UserSettingsService} from '../../../platform/user-settings.service';

@Component({
  selector: 'app-user-configuration',
  templateUrl: './user-configuration.component.html'
})
export class UserConfigurationComponent implements OnInit {

  activeWidget: Widget;

  constructor(private readonly modalService: UserConfigurationModalService,
              private userSettingsService: UserSettingsService,
              private readonly storeService: SettingsStoreService) {}

  ngOnInit(): void {
    this.activeWidget = this.storeService.getWidget();
  }

  activeWidgetActive(option): boolean {
    return option === this.activeWidget;
  }

  setWidget(widget: string): void {
    this.userSettingsService.set(widget);
  }

  saveChanges(): void {
    location.reload();
  }

  close(): void {
    this.modalService.close();
  }

}
