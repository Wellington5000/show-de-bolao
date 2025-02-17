import {Component, OnInit} from '@angular/core';
import {ButtonComponent} from "../components/button/button.component";
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";
import {NgxMaskDirective} from "ngx-mask";
import {HeaderComponent} from "../components/header/header.component";
import {FooterComponent} from "../components/footer/footer.component";
import {AuthService} from "../services/auth.services";
import {NotificationService} from "../services/notification.service";
import {UserModel} from "../models/user.model";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    ButtonComponent,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    NgxMaskDirective,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  user: UserModel;
  userForm!: FormGroup<{
    name: FormControl<string | null>;
    surname: FormControl<string | null>;
    phone_number: FormControl<string | null>;
    email: FormControl<string | null>;
    avatar: FormControl<string | null>;
  }>;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private notificationService: NotificationService,
  ) {
  }

  ngOnInit(): void {
    this.authService.me().subscribe({
      next: (user) => {
        this.userForm = this.fb.group({
          name: this.fb.control(user.name || null, [Validators.required, Validators.maxLength(150)]),
          surname: this.fb.control(user.surname || null, [Validators.required, Validators.maxLength(100)]),
          phone_number: this.fb.control(user.phone_number || null, [Validators.required, Validators.pattern(/\d{2}\d\d{4}\d{4}/)]),
          email: this.fb.control(user.email || null, [Validators.required, Validators.email]),
          avatar: this.fb.control(user.avatar || null, [Validators.required]),
        });
        this.user = user;
      },
      error: (_err) => {
        this.notificationService.addNotification({
          message: 'Erro ao buscar usuário, faça login novamente!',
          type: 'error',
        });
        void this.router.navigate(['/login']);
      }
    })
  }
}
