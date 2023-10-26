import { Injectable } from '@angular/core';
import { MockAuthor } from './mock-author';
import { Author } from './author';

@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  constructor() {}

  getAllAuthors() {
    const allAuthors: Author[] = MockAuthor;
    return allAuthors;
  }
  getAuthorById(id: string): Author | undefined {
    const allAuthors: Author[] = this.getAllAuthors();

    const foundAuthor: Author | undefined = allAuthors.find(
      (author) => author.id === id
    );
    return foundAuthor;
  }
}
