import { bootstrap }    from "@angular/platform-browser-dynamic";
import { HTTP_PROVIDERS, Http } from '@angular/http';
import { PLATFORM_PIPES } from '@angular/core';

import { AuthGuard } from "./service/auth-guard.service";
import { AuthService } from "./service/auth.service";

import { appRouterProviders } from "./app.routes";
import { TranslateService, TranslatePipe, TranslateLoader, TranslateStaticLoader} from "ng2-translate/ng2-translate";
import { AppComponent } from "./app.component";

bootstrap(AppComponent, [
  AuthService,
  AuthGuard,
  appRouterProviders,
  HTTP_PROVIDERS,
  {
    provide: TranslateLoader,
    useFactory: (http: Http) => new TranslateStaticLoader(http, 'app/assets/i18n', '.json'),
    deps: [Http]
  },
  {
    provide: PLATFORM_PIPES,
    useValue: TranslatePipe,
    multi: true
  },
  TranslateService
]).catch(err => console.error(err));
