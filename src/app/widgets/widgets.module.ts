import {ApplicationRef, DoBootstrap, NgModule} from '@angular/core';
import {ActivityWidgetsComponent} from './activities/activity-widget/activity-widgets.component';
import {NewsWidgetComponent} from './news-widget/news-widget.component';
import {BrowserModule} from '@angular/platform-browser';
import {ActivitiesModule} from './activities/activities.module';
import {NewsModule} from './news/news.module';
import {SettingsStoreService} from '../platform/settings-store.service';
import {Widget} from '../platform/widget';


@NgModule({
  // declarations: [ActivityWidgetsComponent, NewsWidgetComponent],
  // entryComponents: [ActivityWidgetsComponent, NewsWidgetComponent],
  imports: [
    BrowserModule,
    ActivitiesModule,
    NewsModule
  ]
})
export class WidgetsModule implements DoBootstrap {
  constructor(private settingsStoreService: SettingsStoreService) {}

  ngDoBootstrap(appRef: ApplicationRef): void {
    const widget = this.settingsStoreService.getWidget();
    if (widget === Widget.NEWS) {
      appRef.bootstrap(NewsWidgetComponent);
    } else {
      appRef.bootstrap(ActivityWidgetsComponent);
    }
  }
}
