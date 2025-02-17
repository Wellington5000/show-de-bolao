import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ButtonComponent} from "../components/button/button.component";
import {AuthService} from "../services/auth.services";
import {NotificationService} from "../services/notification.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-apelido-cadastro',
  templateUrl: './apelido-cadastro.component.html',
  styleUrls: ['./apelido-cadastro.component.scss'],
  standalone: true,
  imports: [
    ButtonComponent,
    ReactiveFormsModule,
    NgIf,
  ]
})
export class ApelidoCadastroComponent implements OnInit {
  apelidoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private notificationService: NotificationService
  ) {
  }

  ngOnInit(): void {
    this.apelidoForm = this.fb.group({
      apelido: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  onSubmit(): void {
    if (this.apelidoForm.valid) {
      this.authService.addSurname(this.apelidoForm.value.apelido).subscribe({
        next: () => {
          this.notificationService.addNotification({
            message: 'Apelido cadastrado com sucesso!',
            type: 'success',
          });
          void this.router.navigate(['/football']);
        },
        error: (_err) => {
          this.notificationService.addNotification({
            message: 'Apelido/Pseudônimo já cadastrado!',
            type: 'error',
          });
        }
      });
    } else {
      console.log('Formulário inválido');
    }
  }
}
