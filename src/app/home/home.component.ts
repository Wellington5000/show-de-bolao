import { Component } from '@angular/core';
import { ButtonComponent } from "../components/button/button.component";
import { CustomButtonComponent } from "../components/custom-button/custom-button.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [ButtonComponent, CustomButtonComponent]
})
export class HomeComponent {

}
