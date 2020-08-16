import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Widget} from './widget';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserSettingsService {

  get(): Observable<UserSettings> {
    const settings: UserSettings = {
      enabledWidget: Widget.NEWS
    };

    return of(settings).pipe(delay(3500));
  }
}
