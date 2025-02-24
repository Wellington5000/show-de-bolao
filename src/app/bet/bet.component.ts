import {Component, OnInit} from '@angular/core';
import {HeaderComponent} from "../components/header/header.component";
import {ButtonComponent} from "../components/button/button.component";
import {CommonModule} from '@angular/common';
import {ZeroPadPipe} from '../directives/zero-pad.pipe';
import {RouterLink} from '@angular/router';
import {CardsService} from "../services/cards.service";
import {NotificationService} from "../services/notification.service";
import {CardMatch, Hint, Match} from "../models/match.model";

@Component({
  selector: 'app-bet',
  standalone: true,
  templateUrl: './bet.component.html',
  styleUrl: './bet.component.scss',
  imports: [HeaderComponent, ButtonComponent, CommonModule, ZeroPadPipe, RouterLink]
})
export class BetComponent implements OnInit {
  shoppingCart: any[] = [];
  games: CardMatch;
  quantityCart = 0;

  constructor(
    private cardsService: CardsService,
    private notificationService: NotificationService,
  ) {
  }

  ngOnInit(): void {
    this.cardsService.currentCard().subscribe({
      next: (card) => {
        const matches = card.games.map((game) => {
          return {match: game, hunch: null} as Match;
        });

        this.games = {
          matches: matches,
          end_date: card.end_date,
          end_date_bet: card.end_date_bet,
          value: card.value,
        }
      },
      error: (_err) => {
        this.notificationService.addNotification({
          message: 'Erro ao buscar cartão',
          type: 'error',
        });
      }
    });
  }

  selectHint(hint: Hint, match: Match): void {
    match.hunch = hint;
  }

  clearHints(): void {
    this.games.matches.forEach((match) => {
      match.hunch = null;
    });
  }

  addShoppingCart(): void {
    this.shoppingCart.push(this.games);
    this.clearHints();
  }
}
