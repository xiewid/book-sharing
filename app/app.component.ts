import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES } from "@angular/router";
import { Router } from "@angular/router";

import { MockService } from "./service/mock.service";

@Component({
  selector: "book-sharing",
  template: `
    <h1>Book Sharing</h1>
    <ul>
      <li *ngFor="let id of categoryIds" (click)="onSelect(id)">
        <a [routerLink]="['/books/category']">{{id}}</a>
      </li>
    </ul>
    <router-outlet></router-outlet>
  `,
  providers: [
    MockService
  ],
  directives: [ROUTER_DIRECTIVES]
})

export class AppComponent {
  categoryIds: string[];

  constructor(
    private router: Router,
    private service: MockService) { }

  ngOnInit() {
    this.service.getCategoryIds().then(ids => this.categoryIds = ids);
  }

  onSelect(id: string) {
    this.router.navigate(["/books", id]);
  }
}
