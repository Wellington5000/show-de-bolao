import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from "../components/button/button.component";
import { FooterComponent } from "../components/footer/footer.component";

@Component({
    selector: 'app-football',
    standalone: true,
    templateUrl: './football.component.html',
    styleUrl: './football.component.scss',
    imports: [
        CommonModule,
        HeaderComponent,
        ButtonComponent,
        FooterComponent
    ]
})
export class FootballComponent {
  items = Array(8).fill(0);
}
