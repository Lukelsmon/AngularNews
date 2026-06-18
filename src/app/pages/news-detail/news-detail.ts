import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-news-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './news-detail.html',
  styleUrl: './news-detail.css'
})
export class NewsDetail implements OnInit {
  article: any = null;
  isBrowser: boolean = false;

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    // Só tenta ler do localStorage se estiver rodando no navegador
    if (this.isBrowser) {
      const saved = localStorage.getItem('selected-article');
      if (saved) {
        this.article = JSON.parse(saved);
      } else {
        // Se o usuário cair aqui de paraquedas sem notícia selecionada, volta para a home
        this.router.navigate(['/home']);
      }
    }
  }
}