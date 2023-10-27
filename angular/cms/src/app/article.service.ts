import { Injectable } from '@angular/core';
import { Article } from './article';
import { MockAtricle } from './mock-atricle';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  data!: Article[];
  constructor(private http: HttpClient) {}

  fetchAllArticles(): Observable<Article[]> {
    console.log('fetch');

    return this.http.get<Article[]>('http://localhost:3000/api/articles');
  }
  getData() {
    this.fetchAllArticles().subscribe((response) => {
      console.log(response);
      this.data = response;
      console.log(this.data);
      return this.data;
    });
  }
  // getAllArticles() {
  //   const allArticles: Article[] = MockAtricle;
  //   return allArticles;
  // }
  getAllArticles() {
    const allArticles: Article[] = this.data;
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
