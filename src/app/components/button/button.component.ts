import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'transparent';
type ButtonColor = 'primary' | 'secondary' | 'tertiary' | 'transparent' | 'success' | 'danger' | 'warning' | 'info';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent implements OnInit {

  @Input() text = 'Botão';
  @Input() variant: ButtonVariant = 'primary';
  @Output() clickButton = new EventEmitter();
  @Input() type = 'button';
  @Input() color: ButtonColor = 'primary';
  @Input() disabled = false;

  ngOnInit(): void {

  }

  buttonWarClicked(): void {
    this.clickButton.emit(true);
  }
}
