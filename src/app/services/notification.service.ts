import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Notification} from '../models/notification.model';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private notificationsSubject = new BehaviorSubject<Notification[]>([]);
  notifications$ = this.notificationsSubject.asObservable();

  addNotification(notification: Notification) {
    const notifications = this.notificationsSubject.getValue();
    this.notificationsSubject.next([...notifications, notification]);
    const timeout = notification.timeout || 3000;
    setTimeout(() => this.removeNotification(notification), timeout);
  }

  private removeNotification(notification: Notification) {
    const notifications = this.notificationsSubject.getValue();
    this.notificationsSubject.next(notifications.filter(n => n !== notification));
  }
}
