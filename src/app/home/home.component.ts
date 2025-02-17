import {Component, OnInit} from '@angular/core';
import {CustomButtonComponent} from "../components/custom-button/custom-button.component";
import {Router, RouterLink} from '@angular/router';
import {FooterComponent} from "../components/footer/footer.component";
import {AuthService} from "../services/auth.services";

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
