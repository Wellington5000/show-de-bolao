import {Component, OnInit} from '@angular/core';
import {CustomButtonComponent} from "../components/custom-button/custom-button.component";
import {RouterLink} from '@angular/router';
import {FooterComponent} from "../components/footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [
    CustomButtonComponent,
    RouterLink,
    FooterComponent,
  ]
})
export class HomeComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {

  }

}
