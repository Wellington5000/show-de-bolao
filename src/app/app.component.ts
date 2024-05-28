import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
      CommonModule, 
      RouterOutlet, 
      HomeComponent,
      RouterModule,
      RegisterComponent,
      RouterLink,
      RouterOutlet,
      RouterLinkActive,
      LoginComponent
    ]
})
export class AppComponent {
  title = 'show-de-bolao';
}
