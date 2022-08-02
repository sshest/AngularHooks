import {Component, OnInit} from '@angular/core';
import { SettingsStoreService } from '../../../platform/settings-store.service';
import { Widget } from '../../../platform/widget';
import {UserSettingsService} from '../../../platform/user-settings.service';

declare interface Closable {
  close: () => void;
}

@Component({
  selector: 'app-user-configuration',
  templateUrl: './user-configuration.component.html'
})
export class UserConfigurationComponent implements OnInit, Closable {

  activeWidget: Widget;

  constructor(
              private userSettingsService: UserSettingsService,
              private storeService: SettingsStoreService) {
  }

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

  close(): void {}
}
