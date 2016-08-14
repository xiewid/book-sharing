import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

import { IBook } from "../model/book";
import { MockService } from "../service/mock.service";

@Component({
  selector: "book-detail",
  templateUrl: "app/component/book-detail.html",
  styleUrls: ["app/component/book-detail.css"],
  providers: [MockService]
})

export class BookDetailComponent implements OnInit, OnDestroy {
  book: IBook;
  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: MockService) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = params["id"];
      this.service.getBook(id).then(book => this.book = book);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
