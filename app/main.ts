import { bootstrap }    from "@angular/platform-browser-dynamic";
import { HTTP_PROVIDERS, Http } from '@angular/http';
import { PLATFORM_PIPES } from '@angular/core';
import { AppComponent } from "./app.component";
import { APP_ROUTER_PROVIDERS } from "./app.routes";
import { TranslateService, TranslatePipe, TranslateLoader, TranslateStaticLoader} from "ng2-translate/ng2-translate";

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  APP_ROUTER_PROVIDERS,
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
