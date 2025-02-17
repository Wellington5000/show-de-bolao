import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RecoverPasswordComponent} from './recover-password/recover-password.component';
import {FootballComponent} from './football/football.component';
import {BetComponent} from './bet/bet.component';
import {PaymentComponent} from './payment/payment.component';
import {ApelidoCadastroComponent} from "./apelido-cadastro/apelido-cadastro.component";
import {authGuard} from "./auth/auth.guard";
import {ProfileComponent} from "./profile/profile.component";
import {LogoutComponent} from "./logout/logout.component";

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'recover-password', component: RecoverPasswordComponent},
  {path: 'recover-password/:reset', component: RecoverPasswordComponent},
  // Logged routes
  {path: 'football', component: FootballComponent, canActivate: [authGuard]},
  {path: 'cadastro-apelido', component: ApelidoCadastroComponent, canActivate: [authGuard]},
  {path: 'betting', component: BetComponent, canActivate: [authGuard]},
  {path: 'payment', component: PaymentComponent, canActivate: [authGuard]},
  {path: 'profile', component: ProfileComponent, canActivate: [authGuard]},
  {path: 'logout', component: LogoutComponent, canActivate: [authGuard]},
];
