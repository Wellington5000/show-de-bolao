import {APP_INITIALIZER, ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideClientHydration} from '@angular/platform-browser';
import {provideEnvironmentNgxMask} from 'ngx-mask';
import {registerLocaleData} from '@angular/common';
import localePt from '@angular/common/locales/pt';
import {
  provideHttpClient, withInterceptors,
} from "@angular/common/http";
import {provideAnimations} from "@angular/platform-browser/animations";
import {AuthInterceptor} from "./auth.interceptor";
import {AuthService} from "./services/auth.services";

registerLocaleData(localePt, 'pt');

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (authService: AuthService) => () => authService.initializeTokens(),
      deps: [AuthService],
      multi: true,
    },
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(),
    provideHttpClient(withInterceptors([AuthInterceptor])),
    provideEnvironmentNgxMask(),
    provideAnimations(),
  ],
};
