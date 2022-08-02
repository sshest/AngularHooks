import {APP_INITIALIZER, Component, OnInit} from '@angular/core';
import {resolve} from '@angular/compiler-cli/src/ngtsc/file_system';

@Component({
  selector: 'app-widget',
  templateUrl: './news-widget.component.html',
})
export class NewsWidgetComponent implements OnInit {
  // constructor() {
  //   console.log('[COMPONENT:NEWS_WIDGET:CONSTRUCTOR]');
  // }

  ngOnInit(): void {
    // console.log('[COMPONENT:NEWS_WIDGET:ON_INIT]');
  }
}
