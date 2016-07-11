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
  enter_date: string;
  borrower?: IUser;
  borrowed_from?: string;
  loan_period?: number;
  recommended?: boolean;
}
