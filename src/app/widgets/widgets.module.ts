import {ApplicationRef, DoBootstrap, NgModule} from '@angular/core';
import { ActivityWidgetsComponent } from './activity-widget/activity-widgets.component';
import { NewsWidgetComponent } from './news-widget/news-widget.component';
import {BrowserModule} from '@angular/platform-browser';
import {ActivitiesModule} from './activities/activities.module';
import { NewsComponent } from './news/news/news.component';
import {NewsModule} from './news/news.module';



@NgModule({
  declarations: [ActivityWidgetsComponent, NewsWidgetComponent, NewsComponent],
  entryComponents: [ActivityWidgetsComponent, NewsWidgetComponent],
  imports: [
    BrowserModule,
    ActivitiesModule,
    NewsModule
  ]
})
export class WidgetsModule implements DoBootstrap {

  ngDoBootstrap(appRef: ApplicationRef): void {
    // appRef.bootstrap(NewsWidgetComponent);
    appRef.bootstrap(ActivityWidgetsComponent);
  }
}
