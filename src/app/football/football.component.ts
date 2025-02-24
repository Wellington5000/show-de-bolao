import {Component, OnInit} from '@angular/core';
import {HeaderComponent} from '../components/header/header.component';
import {CommonModule} from '@angular/common';
import {FooterComponent} from "../components/footer/footer.component";
import {Router, RouterLink} from '@angular/router';
import {AuthService} from "../services/auth.services";
import {UserModel} from "../models/user.model";
import {NotificationService} from "../services/notification.service";
import {CardsService} from "../services/cards.service";
import {Card} from "../models/card.model";

type RoundStatus = 'new-round' | 'in-progress' | 'finished';

@Component({
  selector: 'app-football',
  standalone: true,
  templateUrl: './football.component.html',
  styleUrl: './football.component.scss',
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    RouterLink,
  ]
})
export class FootballComponent implements OnInit {
  roundStatus: RoundStatus = 'new-round';
  user: UserModel;

  card: Card;

  constructor(
    private router: Router,
    private authService: AuthService,
    private cardsService: CardsService,
    private notificationService: NotificationService,
  ) {
  }

  ngOnInit(): void {
    this.authService.me().subscribe({
      next: (user) => {
        if (!user.surname) {
          this.notificationService.addNotification({
            message: 'Complete seu cadastro para continuar!',
            type: 'warning',
          });
          void this.router.navigate(['/cadastro-apelido']);
        } else {
          this.user = user;
        }
      },
      error: (_err) => {
        this.notificationService.addNotification({
          message: 'Erro ao buscar usuário, faça login novamente!',
          type: 'error',
        });
        void this.router.navigate(['/login']);
      }
    })

    this.cardsService.currentCard().subscribe({
      next: (card) => {
        this.card = card;
      },
      error: (_err) => {
        this.notificationService.addNotification({
          message: 'Erro ao buscar cartão, faça login novamente!',
          type: 'error',
        });
        void this.router.navigate(['/login']);
      }
    });
  }
}
