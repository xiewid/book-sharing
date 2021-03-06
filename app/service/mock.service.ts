import { Injectable } from "@angular/core";

import { IBook } from "../model/book";
import { ICategory } from "../model/category";

import { BOOKS } from "../mock/book";
import { CATEGORIES } from "../mock/category";

@Injectable()
export class MockService {

  private getAllBooks() {
    return Promise.resolve(BOOKS);
  }

  private getAllCategories() {
    return Promise.resolve(CATEGORIES);
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

  getCategoryIds() {
    return this.getAllCategories().then(categories => categories.map(category => category._id));
  }
}
