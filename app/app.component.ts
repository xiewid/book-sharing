import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES, Router } from "@angular/router";
import { TranslatePipe, TranslateService } from "ng2-translate/ng2-translate";
import { MockService } from "./service/mock.service";

@Component({
  selector: "book-sharing",
  template: `
    <h1>Book Sharing</h1>
    <ul>
      <li *ngFor="let categoryId of categoryIds" (click)="onSelect(categoryId)">
        <a [routerLink]="['/books/category']">{{categoryId | translate}}</a>
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
    private translate: TranslateService,
    private service: MockService
    ) { }

  ngOnInit() {
    this.service.getCategoryIds().then(ids => this.categoryIds = ids);
    this.initTranslate();
  }

  onSelect(id: string) {
    this.router.navigate(["/books", id]);
  }

  initTranslate() {
    // use navigator lang if available
    var userLang = navigator.language.split('-')[0]; 
    userLang = /(id|de|en)/gi.test(userLang) ? userLang : 'en';

    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    this.translate.use(userLang);
  }
}
