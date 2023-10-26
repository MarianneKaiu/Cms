import { Injectable } from '@angular/core';
import { Article } from './article';
import { MockAtricle } from './mock-atricle';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  data!: any;
  constructor(private http: HttpClient) {}

  fetchAllArticles(): Observable<any> {
    return this.http.get<any[]>('http://localhost:3000/api/articles');
  }
  getData() {
    this.fetchAllArticles().subscribe((response) => {
      this.data = response;
    });
  }
  getAllArticles() {
    const allArticles: Article[] = MockAtricle;
    return allArticles;
  }

  getArticleById(id: string): Article | undefined {
    const allArticles: Article[] = this.getAllArticles();

    const foundArticle: Article | undefined = allArticles.find(
      (article) => article.id === id
    );

    return foundArticle;
  }
}
