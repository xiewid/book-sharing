import { Injectable } from "@angular/core";
import { IBook } from "../model/book";
import { BOOKS } from "../mock/book";
import { ICategory } from "../model/category";
import { CATEGORIES } from "../mock/category";

@Injectable()
export class MockService {

  private getAllBooks() {
    return Promise.resolve(BOOKS);
  }

  getBook(id: string) {
    return this.getAllBooks().then(books => books.find(book => book._id === id));
  }

  getBooksWithCategory(category_id: string) {
    return this.getAllBooks().then(books => books.filter(book => book.category_id === category_id));
  }

  getRecommendedBooks() {
    return this.getAllBooks().then(books => books.filter(book => book.recommended === true));
  }

  getAllCategories() {
    return Promise.resolve(CATEGORIES);
  }
}
