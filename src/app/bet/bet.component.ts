import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../components/header/header.component";
import { ButtonComponent } from "../components/button/button.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-bet',
    standalone: true,
    templateUrl: './bet.component.html',
    styleUrl: './bet.component.scss',
    imports: [HeaderComponent, ButtonComponent, CommonModule]
})
export class BetComponent implements OnInit {
  roundGames = Array(8).fill({
    first_team: 'River Plate',
    second_team: 'Flamengo',
    date: '12-05-2024',
    first_team_uf: 0,
    second_team_uf: 1
  });

  constructor() { }

  ngOnInit(): void {
    
  }
}
