import { Component, OnInit } from '@angular/core';
import {NewsService} from '../news.service';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html'
})
export class NewsListComponent implements OnInit {
  news: News[] = [];
  fetchDate: Date;

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getNews()
      .pipe(
        tap(news => {
          this.news = news;
          this.fetchDate = new Date();
        })
      )
      .subscribe();
  }

}
