import { IUser } from "./user";

export interface IBook {
  _id: string;
  title: string;
  description: string;
  category_id: string;
  author: string;
  isbn: string;
  publisher: string;
  language: string;
  owner: IUser;
  status: string;
  enter_date: Date;
  borrower?: IUser;
  borrowed_from?: Date;
  loan_period?: number;
  recommended?: boolean;
}
