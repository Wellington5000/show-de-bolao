import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from "../components/button/button.component";
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-recover-password',
    standalone: true,
    templateUrl: './recover-password.component.html',
    styleUrl: './recover-password.component.scss',
    imports: [CommonModule, ButtonComponent]
})
export class RecoverPasswordComponent implements OnInit {
    step: string = 'email';

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
    ) { }

    ngOnInit(): void {
        this.step = this.activatedRoute.snapshot.params['reset'] === 'new-password' ? 'new-password' : 'email';
    }

    nextStep(): void {
        this.step = 'new-password';
    }

    recoverPassword(): void {
        this.step = 'success-change-password';
        
        setTimeout(() => {
            this.step = 'email';
            this.router.navigateByUrl('/login');
        }, 4000);
    }
}
