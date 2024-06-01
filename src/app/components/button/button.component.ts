import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent implements OnInit {
  @Input() text = 'Botão';
  @Input() variant = 'primary';
  @Output() clickButton = new EventEmitter();

  ngOnInit(): void {
    
  }

  buttonWarClicked(): void {
    this.clickButton.emit(true);
  }
}
