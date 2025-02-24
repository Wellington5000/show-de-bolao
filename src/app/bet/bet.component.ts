import {Component, OnInit} from '@angular/core';
import {HeaderComponent} from "../components/header/header.component";
import {ButtonComponent} from "../components/button/button.component";
import {CommonModule} from '@angular/common';
import {ZeroPadPipe} from '../directives/zero-pad.pipe';
import {RouterLink} from '@angular/router';
import {CardsService} from "../services/cards.service";
import {NotificationService} from "../services/notification.service";
import {CardMatch, Hint, Match} from "../models/match.model";
import {BettingService} from "../services/betting.service";
import {CartService} from "../services/cart.service";

@Component({
  selector: 'app-bet',
  standalone: true,
  templateUrl: './bet.component.html',
  styleUrl: './bet.component.scss',
  imports: [HeaderComponent, ButtonComponent, CommonModule, ZeroPadPipe, RouterLink]
})
export class BetComponent implements OnInit {
  shoppingCart: CardMatch[] = [];
  games: CardMatch;
  quantityCart = 0;
  total = 0;

  constructor(
    private cardsService: CardsService,
    private cartService: CartService,
    private bettingService: BettingService,
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

    this.cartService.listCarts().subscribe({
      next: (carts) => {
        this.quantityCart = carts.count;
        this.total = carts.results.reduce((acc: number, cart: { card_value: number; }) => Number(acc) + Number(cart.card_value), 0);
      },
      error: () => {
        this.notificationService.addNotification({
          message: 'Erro ao buscar carrinhos',
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
    if (this.games.matches.some((match) => !match.hunch)) {
      this.notificationService.addNotification({
        message: 'Selecione todos os palpites',
        type: 'error',
      });
      return;
    }
    const mappedMatches = this.games.matches.map((match) => {
      return {
        match: match.match.id,
        hunch: match.hunch,
      }
    });
    this.shoppingCart.push(this.games);
    this.bettingService.criarBetting({
      matches: mappedMatches
    }).subscribe({
      next: () => {
        this.notificationService.addNotification({
          message: 'Aposta adicionada ao carrinho',
          type: 'success',
        })
        this.clearHints();
        this.quantityCart = this.quantityCart + 1;
        this.total = this.total + Number(this.games.value);
      },
      error: () => {
        this.notificationService.addNotification({
          message: 'Erro ao adicionar aposta ao carrinho',
          type: 'error',
        });
      }
    });
  }
}
