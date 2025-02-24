import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, map, Observable, takeWhile} from 'rxjs';
import {CardsService} from '../../services/cards.service';
import {AsyncPipe, CommonModule} from "@angular/common";
import {CustomButtonComponent} from "../custom-button/custom-button.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [
    AsyncPipe,
    CustomButtonComponent,
    CommonModule,
    RouterLink
  ],
})
export class HeaderComponent implements OnInit, OnDestroy {
  timeLeft$!: Observable<string>;
  private countdownActive = true;

  constructor(private cardsService: CardsService) {
  }

  ngOnInit(): void {
    this.cardsService.currentCard().subscribe({
      next: (card) => {
        this.startCountdown(new Date(card.end_date));
      },
    });
  }

  startCountdown(endDate: Date) {
    this.timeLeft$ = interval(1000).pipe(
      map(() => {
        const now = new Date();
        const diff = endDate.getTime() - now.getTime();

        if (diff <= 0) {
          this.countdownActive = false;
          return 'Encerrado';
        }

        return this.formatTime(diff);
      }),
      takeWhile(() => this.countdownActive)
    );
  }

  formatTime(ms: number): string {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${this.padZero(hours)}:${this.padZero(minutes)}:${this.padZero(seconds)}`;
  }

  padZero(num: number): string {
    return num.toString().padStart(2, '0');
  }

  ngOnDestroy(): void {
    this.countdownActive = false;
  }
}
