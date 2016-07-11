import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES } from "@angular/router";

import { MockService } from "./service/mock.service";

@Component({
  selector: "book-sharing",
  template: `
    <h1>Book Sharing</h1>
    <a [routerLink]="['/books']">Books</a>
    <router-outlet></router-outlet>
  `,
  providers:  [
    MockService
  ],
  directives: [ROUTER_DIRECTIVES]
})
export class AppComponent { }
