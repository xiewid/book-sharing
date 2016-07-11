import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { MockService } from "../service/mock.service";
import { IBook } from "../model/book";

@Component({
  template: `
    <h2>Books</h2>
    <ul class="items">
      <li *ngFor="let book of books" (click)="onSelect(book)">
        <span class="badge">{{book._id}}</span> {{book.title}}
      </li>
    </ul>
  `
})
export class BookListComponent {
  books: IBook[];

  constructor(
    private router: Router,
    private service: MockService) { }

  ngOnInit() {
    this.service.getRecommendedBooks().then(books => this.books = books);
  }

  onSelect(book: IBook) {
    this.router.navigate(["/book", book._id]);
  }
}
