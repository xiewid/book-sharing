import { provideRouter, RouterConfig } from "@angular/router";

import { BooksRoutes } from "./routes/books.routes";

export const routes = [
  ...BooksRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
