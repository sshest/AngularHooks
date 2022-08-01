import {Injectable} from '@angular/core';
import {Widget} from './widget';

@Injectable({
  providedIn: 'root'
})
export class SettingsStoreService {
  private state: Widget = Widget.NEWS;

  setWidget(type: Widget): void {
    this.state = type;
  }

  getWidget(): Widget {
    return this.state;
  }
}
