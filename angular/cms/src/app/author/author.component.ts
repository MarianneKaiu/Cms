import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Author } from '../author';
import { AuthorService } from '../author.service';
import { ArticleService } from '../article.service';
import { Article } from '../article';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss'],
})
export class AuthorComponent implements OnInit {
  selectedAuthorId!: string;
  selectedAuthor!: Author | void;
  articleWithSameAutor: Article[] = [];

  constructor(
    private route: ActivatedRoute,
    private authorService: AuthorService,
    private articleService: ArticleService
  ) {}

  ngOnInit() {
    //Je souscrit a la route et récupère l'id de l'author dans celle ci

    this.route.params.subscribe((params) => {
      this.selectedAuthorId = params['id'];

      //J'affiche l'author
      this.selectedAuthor = this.authorService.getAuthorById(
        this.selectedAuthorId
      );

      //Je pars chercher tous les articles de cet auteur.ice
      const allArticles: Article[] = this.articleService.getAllArticles();
      ///Je boucle sur le tableau pour regarder les articles ayant le meme auteur
      for (const article of allArticles) {
        //si je trouve un article ayant le meme auteur je le push dans le tableau
        if (article.author.id === this.selectedAuthorId) {
          this.articleWithSameAutor.push(article);
          console.log(this.articleWithSameAutor);
        }
      }
    });
  }
}
