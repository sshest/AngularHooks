import {APP_INITIALIZER, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsListComponent } from './news-list/news-list.component';
import {NewsComponent} from './news/news.component';
import {NewsService} from './news.service';



@NgModule({
  declarations: [NewsComponent, NewsListComponent],
  exports: [NewsListComponent],
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
