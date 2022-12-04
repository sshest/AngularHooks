import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-widget',
  templateUrl: './news-widget.component.html',
})
export class NewsWidgetComponent implements OnInit {
  constructor() {
    console.log('[COMPONENT:NEWS_WIDGET:CONSTRUCTOR]');
  }

  ngOnInit(): void {
    console.log('[COMPONENT:NEWS_WIDGET:ON_INIT]');
  }
}
