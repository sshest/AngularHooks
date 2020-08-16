import { Injectable } from '@angular/core';
import {interval, Observable, ReplaySubject} from 'rxjs';
import {NewsHttpService} from './news-http.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private news$: ReplaySubject<News[]> = new ReplaySubject<News[]>();

  constructor(private newsHttpService: NewsHttpService) { }

  fetchNews(): void {
    interval(3000)
      .pipe(
        map(() => {
          const news = this.newsHttpService.get('');
          this.news$.next(news);
        })
      )
      .subscribe();
  }

  getNews(): Observable<News[]> {
    return this.news$.asObservable();
  }
}
