import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.services";
import {NotificationService} from "../services/notification.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss'
})
export class LogoutComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private notificationService: NotificationService,
  ) {
  }

  ngOnInit(): void {
    this.authService.logout().subscribe({
      next: () => {
        this.notificationService.addNotification({
          message: 'Logout efetuado com sucesso',
          type: 'success',
        });
        void this.router.navigate(['/']);
      },
      error: (_err) => {
        console.error(_err);
        this.notificationService.addNotification({
          message: 'Erro ao efetuar logout',
          type: 'error',
        });
      },
    });
  }

}
