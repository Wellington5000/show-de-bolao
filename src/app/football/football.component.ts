import {Component, OnInit} from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from "../components/button/button.component";
import { FooterComponent } from "../components/footer/footer.component";
import {Router, RouterLink} from '@angular/router';
import {AuthService} from "../services/auth.services";

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
export class FootballComponent implements OnInit {
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

  constructor(
    private router: Router,
    private authService: AuthService,
  ) {
  }

  ngOnInit(): void {
    if (!this.authService.isAuthenticated()) {
      void this.router.navigate(['/login']);
    }
  }
}
