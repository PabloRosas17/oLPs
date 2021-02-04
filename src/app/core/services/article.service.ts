import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../entities/article';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  constructor(private httpclient: HttpClient) {}

  getAllArticles(): Observable<Article[]> {
    const url = `${environment.durpalUrl + environment.drupalApi + '?_format=json' + '&page=0'}`;
    const headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });
    return this.httpclient.get<Article[]>(url, {headers});
  }

  getCertainArticles(page: number): Observable<Article[]> {
    const url = `${environment.durpalUrl + environment.drupalApi + '?_format=json' + '&page=' + page}`;
    const headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });
    return this.httpclient.get<Article[]>(url, {headers});
  }

}
