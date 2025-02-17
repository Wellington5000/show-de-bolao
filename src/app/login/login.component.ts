import {Component, OnInit} from '@angular/core';
import {ButtonComponent} from "../components/button/button.component";
import {Router, RouterLink} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.services";
import {LoginRequest} from "../models/login.model";

import {NotificationService} from "../services/notification.service";

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [ButtonComponent, RouterLink, FormsModule, ReactiveFormsModule]
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup<{
    login: FormControl<string | null>;
    password: FormControl<string | null>;
  }>;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private notificationService: NotificationService,
  ) {
  }

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      void this.router.navigate(['/football']);
    }
    this.loginForm = this.fb.group({
      login: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required, Validators.minLength(6)]),
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const formData: LoginRequest = this.loginForm.value;
      this.authService.login(formData).subscribe({
        next: () => {
          this.notificationService.addNotification({
            message: 'Login efetuado com sucesso',
            type: 'success',
          });
          void this.router.navigate(['/football']);
        },
        error: (_err) => {
          console.error(_err);
          this.notificationService.addNotification({
            message: 'Usuário ou senha inválidos',
            type: 'error',
          });
        },
      });
    }
  }
}
