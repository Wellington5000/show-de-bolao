import {Component, OnInit} from '@angular/core';
import {ButtonComponent} from "../components/button/button.component";
import {CustomButtonComponent} from "../components/custom-button/custom-button.component";
import {Router, RouterLink} from '@angular/router';
import {FooterComponent} from "../components/footer/footer.component";
import {AuthService} from "../services/auth.services";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [
    ButtonComponent,
    CustomButtonComponent,
    RouterLink,
    FooterComponent,
    NgOptimizedImage
  ]
})
export class HomeComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      void this.router.navigate(['/football']);
    }
  }

}
