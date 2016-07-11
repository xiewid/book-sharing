import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Book } from "../model/book";
import { MockService } from "../service/mock.service";

@Component({
  selector: "book-detail",
  templateUrl: "app/component/book-detail.html",
  styleUrls: ["app/component/book-detail.css"]
})

export class BookDetailComponent implements OnInit, OnDestroy {
  book: Book;
  sub: any;

  constructor(
    private mockService: MockService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = +params["id"];
      this.mockService.getBook(id).then(book => this.book = book);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  goBack() {
    window.history.back();
  }
}
