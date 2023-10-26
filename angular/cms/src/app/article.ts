import { Author } from './author';

export class Article {
  constructor(
    public id: string,
    public imageUrl: string,
    public title: string,
    public summary: string,
    public content: string,
    public author: Author,
    public keywords: string[]
  ) {}
}
