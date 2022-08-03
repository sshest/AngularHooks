import {Component, Inject, OnInit, ViewContainerRef, ViewRef} from '@angular/core';
import { SettingsStoreService } from '../../../platform/settings-store.service';
import { Widget } from '../../../platform/widget';
import {UserSettingsService} from '../../../platform/user-settings.service';
import {USER_CONFIGURATION_SERVICE} from '../diTokens';

@Component({
  selector: 'app-user-configuration',
  templateUrl: './user-configuration.component.html'
})
export class UserConfigurationComponent implements OnInit {

  activeWidget: Widget;

  constructor(
              @Inject(USER_CONFIGURATION_SERVICE) private userConfigurationModalService: any,
              private userSettingsService: UserSettingsService,
              private storeService: SettingsStoreService) {}

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
    this.userConfigurationModalService.close();
  }

}
