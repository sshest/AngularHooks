import {Injectable} from '@angular/core';
import {Widget} from './widget';

@Injectable()
export class SettingsStoreService {
  private state: Widget = Widget.NEWS;

  constructor() {
    console.log('[SERVICE:STORE:CONSTRUCTOR]');
  }

  setWidget(type: Widget): void {
    this.state = type;
  }

  getWidget(): Widget {
    return this.state;
  }
}
