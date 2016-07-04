export class Book {
  id: string;
  title: string;
  categoryId: string;
  author: string;
  isbn: string;
  language: string;
  owner: User;
  status: string;
}

export class User {
  id: string;
}
