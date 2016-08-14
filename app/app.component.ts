import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES, Router } from "@angular/router";
import { TranslatePipe, TranslateService } from "ng2-translate/ng2-translate";

import { LoginComponent } from "./component/login.component";
import { HomeComponent } from "./component/home.component";
import { BookListComponent } from "./component/book-list.component";
import { BookDetailComponent } from "./component/book-detail.component" 

@Component({
  selector: "book-sharing",
  template: `
    <nav>
      <a routerLink="/home" routerLinkActive="active">Home</a>
      <a routerLink="/login" routerLinkActive="active">Login</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  providers: [], 
  directives: [ROUTER_DIRECTIVES],
  precompile: [LoginComponent, HomeComponent, BookListComponent, BookDetailComponent]
})

export class AppComponent {

  constructor(private translator: TranslateService) { 
    // use navigator lang if available
    var userLang = navigator.language.split('-')[0]; 
    userLang = /(id|de|en)/gi.test(userLang) ? userLang : 'en';

    // this language will be used as a fallback when a translation isn't found in the current language
    this.translator.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    this.translator.use(userLang);
  }
}
