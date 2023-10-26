import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { Article } from '../article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
  allArticles!: Article[];
  //TODO Math.random featuredArticle
  featuredArticleId: string = '2';
  featuredArticle!: Article;
  unfeaturedArticle!: Article[];

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.articleService.getData();
    this.allArticles = this.articleService.getAllArticles();
    this.getFeaturedArticle();
    this.getUnfeaturedArticle();
    console.log(this.articleService.fetchAllArticles());
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
