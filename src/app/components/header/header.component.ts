import { Component, OnInit } from '@angular/core';
import { CustomButtonComponent } from "../custom-button/custom-button.component";
import {CommonModule} from '@angular/common';
import {RouterLink} from "@angular/router";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
  imports: [
    CustomButtonComponent,
    CommonModule,
    RouterLink
  ]
})
export class HeaderComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {

    }
}
