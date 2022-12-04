import {APP_BOOTSTRAP_LISTENER, APP_INITIALIZER, ComponentFactoryResolver, ComponentRef, NgModule, ViewContainerRef} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsListComponent } from './news-list/news-list.component';
import {NewsComponent} from './news/news.component';
import {NewsService} from './news.service';
import {NewsWidgetComponent} from '../news-widget/news-widget.component';
import {take, tap} from 'rxjs/operators';


@NgModule({
    declarations: [NewsComponent, NewsListComponent, NewsWidgetComponent],
    exports: [NewsListComponent, NewsWidgetComponent],
    imports: [
        CommonModule
    ],
    providers: [
        {
            provide: APP_INITIALIZER,
            multi: true,
            useFactory: (newsService: NewsService) => {
                console.log('[MODULE:NEWS_WIDGET:APP_INITIALIZER] - before fetch');
                return () => {
                    newsService.fetchNews();
                    return newsService.getNews()
                        .pipe(take(1));
                };
            },
            deps: [NewsService]
        },
        {
          multi: true,
          provide: APP_BOOTSTRAP_LISTENER,
          useFactory: () => {
            return () => {
              console.log('[MODULE:NEWS_WIDGET:APP_BOOTSTRAP_LISTENER]');
            };
          },
        }
    ]
})
export class NewsModule { }
