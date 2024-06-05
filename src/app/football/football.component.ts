import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from "../components/button/button.component";
import { FooterComponent } from "../components/footer/footer.component";
import { RouterLink } from '@angular/router';

type RoundStatus= 'new-round' | 'in-progress' | 'finished';

@Component({
    selector: 'app-football',
    standalone: true,
    templateUrl: './football.component.html',
    styleUrl: './football.component.scss',
    imports: [
        CommonModule,
        HeaderComponent,
        ButtonComponent,
        FooterComponent,
        RouterLink
    ]
})
export class FootballComponent {
  roundStatus: RoundStatus = 'new-round';

  items = Array(8).fill({
    game: {
      tournament: 'Copa Libertadores',
      first_team: 'River Plate',
      second_team: 'Flamengo',
      date: '12-05-2024',
      first_team_score: 0,
      second_team_score: 1
    }
  });
}
