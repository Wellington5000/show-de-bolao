import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from "../components/button/button.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-register',
    standalone: true,
    templateUrl: './register.component.html',
    styleUrl: './register.component.scss',
    imports: [ButtonComponent, RouterLink]
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
}
