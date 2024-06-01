import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from "../components/button/button.component";
import { RouterLink } from '@angular/router';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';

@Component({
    selector: 'app-register',
    standalone: true,
    templateUrl: './register.component.html',
    styleUrl: './register.component.scss',
    imports: [
      ButtonComponent, 
      RouterLink,
      NgxMaskDirective ,
      NgxMaskPipe
    ]
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
}
