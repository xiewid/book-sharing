import { Injectable } from "@angular/core";
import { Book } from "./model/book";
import { Category } from "./model/category";
import { CATEGORIES } from "./mock/category";

@Injectable()
export class MockService {

  private getAllBooks() {
    return Promise.resolve(BOOKS);
  }

  getBook(id: number) {
    return this.getAllBooks().then(books => books.find(book => book._id === id));
  }

  getBooksWithCategory(category_id: number) {
    return this.getAllBooks().then(books => books.find(book => book.category_id === category_id));
  }

  getRecommendedBooks() {
    return this.getAllBooks().then(books => books.find(book => book.recommended === true));
  }

  getAllCategories() {
    return Promise.resolve(CATEGORIES);
  }
}
