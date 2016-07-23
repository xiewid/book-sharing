import { provideRouter, RouterConfig } from "@angular/router";

import { BooksRoutes } from "./routes/books.routes";
import { AppComponent } from "./app.component";

export const routes = [
  ...BooksRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
