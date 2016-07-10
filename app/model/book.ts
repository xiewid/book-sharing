export class Book {
  constructor(
    _id: string,
    title: string,
    description: string,
    category_id: string;
    author: string;
    isbn: string;
    publisher: string;
    language: string;
    owner: User;
    borrower?: User;
    status: string;
    borrowed_from?: Date;
    loan_period?: number;
    enter_date: Date;
    recommended?: boolean;
  ) {}
}
