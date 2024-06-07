import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../components/header/header.component";
import { ButtonComponent } from "../components/button/button.component";
import { CommonModule } from '@angular/common';
import { ZeroPadPipe } from '../directives/zero-pad.pipe';


export interface Match {
  draw: boolean;
  first_team_choose: boolean;
  first_team: string;
  second_team_choose: boolean;
  second_team: string;
  date: string;
  first_team_country: number;
  second_team_country: number;
}


@Component({
    selector: 'app-bet',
    standalone: true,
    templateUrl: './bet.component.html',
    styleUrl: './bet.component.scss',
    imports: [HeaderComponent, ButtonComponent, CommonModule, ZeroPadPipe]
})
export class BetComponent implements OnInit {
  roundGames: Match[] = [
    {
      draw: false,
      first_team_choose: false,
      first_team: 'River Plate/ARG',
      second_team_choose: false,
      second_team: 'Flamengo/BRA',
      date: '12-05-2024',
      first_team_country: 0,
      second_team_country: 1,
    },
    {
      draw: false,
      first_team_choose: false,
      first_team: 'River Plate/ARG',
      second_team_choose: false,
      second_team: 'Flamengo/BRA',
      date: '12-05-2024',
      first_team_country: 0,
      second_team_country: 1,
    },
    {
      draw: false,
      first_team_choose: false,
      first_team: 'River Plate/ARG',
      second_team_choose: false,
      second_team: 'Flamengo/BRA',
      date: '12-05-2024',
      first_team_country: 0,
      second_team_country: 1,
    },
    {
      draw: false,
      first_team_choose: false,
      first_team: 'River Plate/ARG',
      second_team_choose: false,
      second_team: 'Flamengo/BRA',
      date: '12-05-2024',
      first_team_country: 0,
      second_team_country: 1,
    },
    {
      draw: false,
      first_team_choose: false,
      first_team: 'River Plate/ARG',
      second_team_choose: false,
      second_team: 'Flamengo/BRA',
      date: '12-05-2024',
      first_team_country: 0,
      second_team_country: 1,
    },
    {
      draw: false,
      first_team_choose: false,
      first_team: 'River Plate/ARG',
      second_team_choose: false,
      second_team: 'Flamengo/BRA',
      date: '12-05-2024',
      first_team_country: 0,
      second_team_country: 1,
    },
    {
      draw: false,
      first_team_choose: false,
      first_team: 'River Plate/ARG',
      second_team_choose: false,
      second_team: 'Flamengo/BRA',
      date: '12-05-2024',
      first_team_country: 0,
      second_team_country: 1,
    },
    {
      draw: false,
      first_team_choose: false,
      first_team: 'River Plate/ARG',
      second_team_choose: false,
      second_team: 'Flamengo/BRA',
      date: '12-05-2024',
      first_team_country: 0,
      second_team_country: 1,
    }
  ];

  constructor() { }

  ngOnInit(): void {
    
  }

  selectHint(hint: string, match: Match): void {
    switch (hint) {
      case 'first-team':
        match.first_team_choose = !match.first_team_choose;
        match.second_team_choose = false;
        match.draw = false;
        break;

      case 'second-team':
        match.first_team_choose = false;
        match.second_team_choose = !match.second_team_choose;
        match.draw = false;
        break;

      case 'draw':
        match.first_team_choose = false;
        match.second_team_choose = false;
        match.draw = !match.draw;
        break;
    
      default:
        match.first_team_choose = false;
        match.second_team_choose = false;
        match.draw = false;
        break;
    }
  }

  clearHints(): void {
    this.roundGames.forEach((match) => {
      match.first_team_choose = false;
      match.second_team_choose = false;
      match.draw = false;
    });
  }
}
