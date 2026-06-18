import { Component, OnInit } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common'; 
import { News } from '../../services/news'; 
import { NewsArticle } from '../../models/news'; 
import { Storage } from '../../services/storage'; 
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TitleCasePipe, RouterModule], 
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  articles: NewsArticle[] = []; 
  categories: string[] = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
  selectedCategory: string = 'general';
  errorMessage: string = '';
  loading: boolean = false; 

  constructor(
    private newsService: News, 
    private storageService: Storage,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadNews(this.selectedCategory);
  }

  loadNews(category: string) {
    this.selectedCategory = category;
    this.errorMessage = ''; 
    this.loading = true; 

    // Solicita permissão de Notificação nativa do navegador se ainda não tiver definido
    if (typeof window !== 'undefined' && 'Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission();
    }

    // Exibe os dados salvos imediatamente para evitar tela em branco,
    // mas NÃO interrompe o fluxo com return, permitindo que as amarrações do sistema funcionem.
    if (typeof window !== 'undefined') {
    const cachedData = this.storageService.getCache(category);
    if (cachedData) {
      this.articles = cachedData;
      this.loading = false;
    }
  }

    this.newsService.getNewsByCategory(category).subscribe({
      next: (response: any) => {
        this.articles = response.articles; 
        this.loading = false; 
        
        // Atualiza o cache local com os dados mais recentes do servidor
        this.storageService.setCache(category, this.articles); 

        // Disparo de notificação Push Nativa se houver novas notícias
        if (typeof window !== 'undefined' && 'Notification' in window && Notification.permission === 'granted' && this.articles.length > 0) {
          new Notification('Portal de Notícias', {
            body: `Novas notícias carregadas na sua categoria de interesse: ${category.toUpperCase()}! 🔥`
          });
        }
      },
      error: (err: any) => {
        this.errorMessage = err.message; 
        this.loading = false; 
        
        // Se der erro de rede (offline), garante o uso definitivo do cache local
        const offlineArticles = this.storageService.getCache(category);
        if (offlineArticles) {
          this.articles = offlineArticles; 
          this.errorMessage = 'Você está offline. Exibindo notícias carregadas do armazenamento local.'; 
        } else {
          this.errorMessage += ' E não há notícias em cache para exibir.'; 
          this.articles = []; 
        }
      }
    });
  }

  // Navegação para a página de detalhes da notícia, passando o artigo selecionado via localStorage
  goToDetail(article: any) {
    if (typeof window !== 'undefined' && article) {
      localStorage.setItem('selected-article', JSON.stringify(article));
      this.router.navigate(['/news-detail']).then(navigated => {
        if (!navigated) {
          console.error('Falha ao navegar para o detalhamento da notícia.');
        }
      });
    }
  }

  toggleFavorite(articleId: string) {
    if (this.storageService.isFavorite(articleId)) {
      this.storageService.removeFavorite(articleId);
    } else {
      this.storageService.addFavorite(articleId);
    }
  }

  isFavorite(articleId: string): boolean {
    return this.storageService.isFavorite(articleId);
  }
}