import {APP_INITIALIZER, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsListComponent } from './news-list/news-list.component';
import {NewsComponent} from './news/news.component';
import {NewsService} from './news.service';
import {NewsWidgetComponent} from '../news-widget/news-widget.component';



@NgModule({
  declarations: [NewsComponent, NewsListComponent, NewsWidgetComponent],
  exports: [NewsListComponent],
  entryComponents: [NewsListComponent, NewsWidgetComponent],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: (newsService: NewsService) => {
        return () => {
          newsService.fetchNews();
        };
      },
      deps: [NewsService]
    }
  ]
})
export class NewsModule { }
