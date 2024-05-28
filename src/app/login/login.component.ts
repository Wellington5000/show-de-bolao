import { Component } from '@angular/core';
import { ButtonComponent } from "../components/button/button.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
    imports: [ButtonComponent, RouterLink]
})
export class LoginComponent {

}
