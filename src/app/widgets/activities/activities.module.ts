import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivitiesListComponent } from './activities-list/activities-list.component';
import {ActivityWidgetsComponent} from './activity-widget/activity-widgets.component';


@NgModule({
  declarations: [ActivitiesListComponent, ActivityWidgetsComponent],
  exports: [ActivitiesListComponent, ActivityWidgetsComponent],
  entryComponents: [ActivitiesListComponent, ActivityWidgetsComponent],
  imports: [
    CommonModule
  ]
})
export class ActivitiesModule { }
