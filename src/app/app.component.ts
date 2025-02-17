import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, RouterOutlet} from '@angular/router';
import {NotificationComponent} from "./components/notification/notification.component";;

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    RouterOutlet,
    NotificationComponent,

  ]
})
export class AppComponent {
  title = 'show-de-bolao';
}
