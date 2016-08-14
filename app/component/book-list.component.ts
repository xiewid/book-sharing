import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

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
  `,
  providers: [MockService]
})
export class BookListComponent {
  books: IBook[];
  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: MockService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let category_id = params["category_id"];
      if (category_id === "recommended") {
        this.service.getRecommendedBooks().then(books => this.books = books);
      } else {
        this.service.getBooksWithCategory(category_id).then(books => this.books = books);
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onSelect(book: IBook) {
    this.router.navigate(["/book", book._id]);
  }
}
