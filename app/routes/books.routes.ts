import { RouterConfig }          from "@angular/router";
import { BookListComponent }     from "../component/book-list";
import { BookDetailComponent }   from "../component/book-detail";

export const BooksRoutes: RouterConfig = [
  { path: "books",  component: BookListComponent },
  { path: "book/:id", component: BookDetailComponent }
];
