import {CanActivateFn} from '@angular/router';
import {inject} from '@angular/core';
import {AuthService} from "../services/auth.services";

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  return authService.isAuthenticated();
};
