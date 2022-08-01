import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Widget} from './widget';
import {delay} from 'rxjs/operators';
import {UserSettings} from './user-settings';

@Injectable({
  providedIn: 'root'
})
export class UserSettingsService {

  get(): Observable<UserSettings> {
    const item = localStorage.getItem('widget');
    const settings: UserSettings = {
      enabledWidget: item === 'activities' ? Widget.ACTIVITES : Widget.NEWS
    };

    return of(settings).pipe(delay(3500));
  }

  set(widget): void {
    localStorage.setItem('widget', widget);
  }
}
