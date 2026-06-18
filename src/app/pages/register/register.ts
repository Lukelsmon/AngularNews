import { Component } from '@angular/core';
import { Auth } from '../../services/auth';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Vai ajudar pra usar [(ngModel)]
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule], 
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  // Objeto no intuito de conectar inputs do HTML
  user = {
    name: '',
    email: '',
    password: ''
  };
  errorMessage: string = '';

  constructor(private auth: Auth, private router: Router) {}

  OnSubmit() {
    if (!this.user.name || !this.user.email || !this.user.password) {
      this.errorMessage = 'Preencha todos os campos!';
      return;
    }

    const success = this.auth.registerUser(this.user);
    if (success) {
      alert('Muito bem, você se cadastrou com sucesso! Agora faça o seu login.');
      this.router.navigate(['/login']);
    } else {
      this.errorMessage = 'E-mail já existe. Tente outro.';
    }
  }
}