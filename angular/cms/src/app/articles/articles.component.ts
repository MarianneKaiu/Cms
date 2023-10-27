import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { Article } from '../article';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
  allArticles!: Article[];
  newArticles!: Observable<Article[]>;
  //TODO Math.random featuredArticle
  featuredArticleId: string = '4';
  featuredArticle!: Article;
  unfeaturedArticle!: Article[];

  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    this.articleService.getData();
    this.allArticles = this.articleService.getAllArticles();
    console.log(this.allArticles);
    // this.getFeaturedArticle();
    // this.getUnfeaturedArticle();
  }

  getFeaturedArticle() {
    this.allArticles.find((article) => {
      article.id === this.featuredArticleId;
      this.featuredArticle = article;
    });
  }
  getUnfeaturedArticle() {
    this.unfeaturedArticle = this.allArticles.filter((article) => {
      return article.id !== this.featuredArticleId;
    });
  }
}
