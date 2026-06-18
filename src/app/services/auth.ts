import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class Auth {
    private USER_KEY = 'portal_news_user';
    private SESSION_KEY = 'portal_news_session';
    constructor() {}

    // Cadastra um usuário no LocalStorage
  registerUser(userData: any): boolean {
    const users = this.getRegisteredUsers();
    // Evita e-mails duplicados
    if (users.some((u: any) => u.email === userData.email)) {
      return false;
    }
    users.push(userData);
    localStorage.setItem(this.USER_KEY, JSON.stringify(users));
    return true;
  }

  // Realiza o login se as credenciais baterem
  login(credentials: any): boolean {
    const users = this.getRegisteredUsers();
    const userFound = users.find((u: any) => u.email === credentials.email && u.password === credentials.password);
    
    if (userFound) {
      localStorage.setItem(this.SESSION_KEY, JSON.stringify(userFound));
      return true;
    }
    return false;
  }

  // O logout do usuário
  logout(): void {
    localStorage.removeItem(this.SESSION_KEY);
  }

  // Retorna os dados do usuário atualmente logado
  getCurrentUser(): any {
    const session = localStorage.getItem(this.SESSION_KEY);
    return session ? JSON.parse(session) : null;
  }

  private getRegisteredUsers(): any[] {
    const data = localStorage.getItem(this.USER_KEY);
    return data ? JSON.parse(data) : [];
  }
}
