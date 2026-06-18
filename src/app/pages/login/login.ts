import { Component } from '@angular/core';
import { Auth } from '../../services/auth';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Vai ajudar pra usar [(ngModel)]
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  credentials = {
    email: '',
    password: ''
  };
  errorMessage: string = '';

  constructor(private auth: Auth, private router: Router) {}

  OnLogin() {
    if (!this.credentials.email || !this.credentials.password) {
      this.errorMessage = 'Preencha todos os campos!';
      return;
    }

    const success = this.auth.login(this.credentials);
    if (success) {
      this.router.navigate(['/home']);
    } else {
      this.errorMessage = 'E-mail ou senha inválidos.';
    }
  }
}
