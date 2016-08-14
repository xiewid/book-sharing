import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES, Router } from "@angular/router";
import { TranslatePipe, TranslateService } from "ng2-translate/ng2-translate";
import { AuthService } from "../service/auth.service";
import { MockService } from "../service/mock.service";

@Component({
  template: `
    <h1>Book Sharing</h1>
    <ul>
      <li *ngFor="let categoryId of categoryIds" (click)="onSelect(categoryId)">
        <span class="badge">{{categoryId | translate}}</span>
      </li>
    </ul>
  `,
  providers: [MockService],
  directives: [ROUTER_DIRECTIVES]
})

export class HomeComponent {
  categoryIds: string[];

  constructor(
    private router: Router,
    private service: MockService
    ) { }

  ngOnInit() {
    this.service.getCategoryIds().then(ids => this.categoryIds = ids);
  }

  onSelect(id: string) {
    this.router.navigate(["/books", id]);
  }
}
