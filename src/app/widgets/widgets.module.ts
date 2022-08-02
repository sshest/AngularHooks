import {APP_INITIALIZER, ApplicationRef, DoBootstrap, NgModule} from '@angular/core';
import {ActivityWidgetsComponent} from './activities/activity-widget/activity-widgets.component';
import {NewsWidgetComponent} from './news-widget/news-widget.component';
import {BrowserModule} from '@angular/platform-browser';
import {ActivitiesModule} from './activities/activities.module';
import {NewsModule} from './news/news.module';
import {SettingsStoreService} from '../platform/settings-store.service';
import {Widget} from '../platform/widget';
import {NewsService} from './news/news.service';
import {take} from 'rxjs/operators';


@NgModule({
  imports: [
    BrowserModule,
    ActivitiesModule,
    NewsModule
  ],
  // providers: [
  //   {
  //     provide: APP_INITIALIZER,
  //     multi: true,
  //     useFactory: () => {
  //       return () => {
  //         console.log('[MODULE:WIDGETS:APP_INITIALIZER]');
  //       };
  //     },
  //   }
  // ]
})
export class WidgetsModule implements DoBootstrap {
  constructor(private settingsStoreService: SettingsStoreService) {
    // console.log('[MODULE:WIDGETS:CONSTRUCTOR]');
  }

  ngDoBootstrap(appRef: ApplicationRef): void {
    // console.log('[MODULE:WIDGETS:DO_BOOTSTRAP]');
    const widget = this.settingsStoreService.getWidget();
    if (widget === Widget.NEWS) {
      appRef.bootstrap(NewsWidgetComponent);
    } else {
      appRef.bootstrap(ActivityWidgetsComponent);
    }
  }
}
