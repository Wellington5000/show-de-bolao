import {Component} from '@angular/core';
import {NotificationService} from "../../services/notification.service";
import {Notification} from '../../models/notification.model';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="notification-container">
      <div
        *ngFor="let notification of notifications"
        class="notification"
        [ngClass]="notification.type"
      >
        {{ notification.message }}
      </div>
    </div>
  `,
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent {
  notifications: Notification[] = [];

  constructor(private notificationService: NotificationService) {
    this.notificationService.notifications$.subscribe(notifications => {
      this.notifications = notifications;
    });
  }
}
