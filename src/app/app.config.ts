import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideClientHydration} from '@angular/platform-browser';
import {provideEnvironmentNgxMask} from 'ngx-mask';
import {registerLocaleData} from '@angular/common';
import localePt from '@angular/common/locales/pt';
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
} from "@angular/common/http";
import {provideAnimations} from "@angular/platform-browser/animations";
import {AuthInterceptor} from "./auth.interceptor";

registerLocaleData(localePt, 'pt');

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    provideEnvironmentNgxMask(),
    provideAnimations(),
  ],
};
