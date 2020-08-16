import {ApplicationRef, DoBootstrap, NgModule} from '@angular/core';
import { ActivityWidgetsComponent } from './activity-widget/activity-widgets.component';
import { NewsWidgetComponent } from './news-widget/news-widget.component';
import {BrowserModule} from '@angular/platform-browser';



@NgModule({
  declarations: [ActivityWidgetsComponent, NewsWidgetComponent],
  entryComponents: [ActivityWidgetsComponent, NewsWidgetComponent],
  imports: [
    BrowserModule
  ]
})
export class WidgetsModule implements DoBootstrap {

  ngDoBootstrap(appRef: ApplicationRef): void {
    appRef.bootstrap(NewsWidgetComponent);
  }
}
