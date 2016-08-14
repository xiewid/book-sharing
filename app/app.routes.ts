import { provideRouter, RouterConfig } from "@angular/router";
import { AuthGuard } from "./service/auth-guard.service";
import { LoginComponent } from "./component/login.component";
import { HomeComponent } from "./component/home.component";
import { BookListComponent } from "./component/book-list.component";
import { BookDetailComponent } from "./component/book-detail.component";

export const routes: RouterConfig = [
  { path: "login", component: LoginComponent },
  { path: "home", component: HomeComponent },
  { path: "books/:category_id", component: BookListComponent },
  { path: "book/:id", component: BookDetailComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" }
];

export const appRouterProviders = [
  provideRouter(routes)
];
