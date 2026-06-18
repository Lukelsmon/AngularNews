import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Auth } from '../../services/auth';
import { Storage } from '../../services/storage';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile implements OnInit {
  currentUser: any = null;
  favoriteTitles: string[] = [];
  favoriteArticles: any[] = [];
  isBrowser: boolean = false;

  constructor(
    private authService: Auth, 
    private storageService: Storage, 
    private router: Router,
    @Inject(PLATFORM_ID) private platform: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platform); // Verifica se o código está rodando no navegador
  }

  ngOnInit() {
    if (this.isBrowser) { 
      this.currentUser = this.authService.getCurrentUser(); 
      
      if (!this.currentUser) {
        this.router.navigate(['/login']); // Se não houver usuário logado no navegador, vai para o login
      } else {
        this.loadFavorites(); // Se houver, carrega os favoritos
      }
    }
  }

  loadFavorites() {
    if (!this.isBrowser) return; // Proteção para não rodar no servidor

    this.favoriteTitles = this.storageService.getFavorites(); 
    const allCachedArticles: any[] = [];
    const categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];

    categories.forEach(category => {
      const cached = this.storageService.getCache(category);
      if (cached && cached.length > 0) {
        allCachedArticles.push(...cached);
      }
    });

    this.favoriteArticles = allCachedArticles.filter(article => 
      article && article.title && this.favoriteTitles.includes(article.title)
    );

    this.favoriteArticles = this.favoriteArticles.filter((article, index, self) =>
      index === self.findIndex((t) => t.title === article.title)
    );
  }

  removeFavorite(title: string) {
    if (this.isBrowser) {
      this.storageService.removeFavorite(title);
      this.loadFavorites(); 
    }
  }

  logout() {
    //  Só executa se FOR o navegador
    if (this.isBrowser) {
      this.authService.logout();
      this.router.navigate(['/login']);
    }
  }
}