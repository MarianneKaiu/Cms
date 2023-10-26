import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../article.service';
import { Article } from '../article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  selectedArticleId!: string;
  selectedArticle!: Article | void;
  //Je recup les keywords de l'article selectionné
  selectedArticleKeyword: string[] = [];
  //J'injecterais les articles ayant des keywords simillaires
  sameKeywordArticle: Article[] = [];
  //Aller chercher l'id de l'author
  selectedArticleAuthorId!: string;
  //Demander au service d'aller chercher l'auteur
  selectedArticleAuthor!: string;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      // Je souscris et affiche l'article selectionné
      this.selectedArticleId = params['id'];
      //
      this.selectedArticle = this.articleService.getArticleById(
        this.selectedArticleId
      );
      //
      this.sameKeywordArticle = [];

      // Je recup et push les keywords de l'article selectionné
      if (this.selectedArticle) {
        for (let i = 0; i < this.selectedArticle.keywords.length; i++) {
          this.selectedArticleKeyword.push(this.selectedArticle.keywords[i]);
        }
      }
      // Je récupère les autres atricles
      const allArticles = this.articleService.getAllArticles();
      /// Je boucle sur le tableau pour regarder ou trouver des articles ayant le meme mot clé
      for (const article of allArticles) {
        if (
          //si je trouve un article ayant le meme mot clé && que son id est !== alors je push dans le tableau
          article.keywords.some((keyword) =>
            this.selectedArticleKeyword.includes(keyword)
          ) &&
          article.id !== this.selectedArticleId
        ) {
          this.sameKeywordArticle.push(article);
        }
      }
    });
  }
}
