import { provideRouter, RouterConfig }  from "@angular/router";

import { BookDetailComponent } from "./component/book-detail";

export const routes: RouterConfig = [
  {
    path: "book/:id",
    component: BookDetailComponent
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
