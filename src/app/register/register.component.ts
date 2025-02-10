import {Component, OnInit} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  AbstractControl,
  ValidationErrors,
  ReactiveFormsModule
} from '@angular/forms';
import {Router, RouterLink} from '@angular/router';
import {NgOptimizedImage} from '@angular/common';
import {NgxMaskDirective} from 'ngx-mask';
import {ButtonComponent} from "../components/button/button.component";
import {AuthService} from "../services/auth.services";
import {UserModel} from "../models/user.model";
import {NotificationService} from "../services/notification.service";

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  imports: [
    RouterLink,
    NgOptimizedImage,
    NgxMaskDirective,
    ReactiveFormsModule,
    ButtonComponent,
  ],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup<{
    name: FormControl<string | null>;
    surname: FormControl<string | null>;
    phone_number: FormControl<string | null>;
    email: FormControl<string | null>;
    password: FormControl<string | null>;
    confirm_password: FormControl<string | null>;
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
      void this.router.navigate(['/']);
    }
    this.registerForm = this.fb.group({
      name: this.fb.control('', [Validators.required, Validators.maxLength(150)]),
      surname: this.fb.control('', [Validators.required, Validators.maxLength(100)]),
      phone_number: this.fb.control('', [Validators.required, Validators.pattern(/\d{2}\d\d{4}\d{4}/)]),
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required, Validators.minLength(6)]),
      confirm_password: this.fb.control('', [Validators.required]),
    }, {validators: this.matchPasswords});
  }

  matchPasswords(group: AbstractControl): ValidationErrors | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirm_password')?.value;
    return password === confirmPassword ? null : {notMatching: true};
  }

  onSubmit(): void {
    const formData: UserModel = this.registerForm.value;
    this.authService.createAccount(formData).subscribe({
      next: () => {
        this.notificationService.addNotification({
          message: 'Conta criada com sucesso, faça login para continuar.',
          type: 'success',
        });
        void this.router.navigate(['/login'])
      },
      error: (err) => {
        this.notificationService.addNotification({
          message: 'Erro ao criar conta, tente novamente.',
          type: 'error',
        });
      },
    });

  }
}
