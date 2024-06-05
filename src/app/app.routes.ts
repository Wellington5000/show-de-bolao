import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { FootballComponent } from './football/football.component';
import { BetComponent } from './bet/bet.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'recover-password', component: RecoverPasswordComponent },
    { path: 'recover-password/:reset', component: RecoverPasswordComponent },

    { path: 'football', component: FootballComponent },
    { path: 'bet', component: BetComponent }, 
]; 
