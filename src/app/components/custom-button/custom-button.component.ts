import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  standalone: true,
  imports: [],
  templateUrl: './custom-button.component.html',
  styleUrl: './custom-button.component.scss'
})
export class CustomButtonComponent  {
  @Input() text = 'Botão';
  @Output() clickButton = new EventEmitter();

  ngOnInit(): void {
    
  }
}
