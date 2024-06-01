import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { CustomButtonComponent } from "../custom-button/custom-button.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    imports: [
        ButtonComponent, 
        CustomButtonComponent,
        CommonModule
    ]
})
export class HeaderComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
        
    }
}
