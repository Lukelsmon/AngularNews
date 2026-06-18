// Arquivo de cache para o serviço de armazenamento

import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class Storage {
    private FAVORITES_KEY = 'angular-news-favorites';
    private CACHE_KEY_PREFIX = 'angular-news-cache-';

    constructor() {}

    // Métodos para favoritos
    getFavorites(): string[] {
        const favorites = localStorage.getItem(this.FAVORITES_KEY);
        return favorites ? JSON.parse(favorites) : [];
    }

    addFavorite(articleId: string): void {
        const favorites = this.getFavorites();
        if (!favorites.includes(articleId)) {
            favorites.push(articleId);
            localStorage.setItem(this.FAVORITES_KEY, JSON.stringify(favorites));
        }
    }

    removeFavorite(articleId: string): void {
        let favorites = this.getFavorites();
        favorites = favorites.filter(id => id !== articleId);
        localStorage.setItem(this.FAVORITES_KEY, JSON.stringify(favorites));
    }

    isFavorite(articleId: string): boolean {
        const favorites = this.getFavorites();
        return favorites.includes(articleId);
    }

    // Métodos para cache
    setCache(category: string, data: any): void {
        const cacheKey = this.CACHE_KEY_PREFIX + category;
        const cacheData = {
            timestamp: Date.now(),
            data: data
        };
        localStorage.setItem(cacheKey, JSON.stringify(cacheData));
    }

    getCache(category: string): any | null {
        const cacheKey = this.CACHE_KEY_PREFIX + category;
        const cacheData = localStorage.getItem(cacheKey);
        if (cacheData) {
            const parsedCache = JSON.parse(cacheData);
            // Verifica se o cache é válido (menos de 1 hora)
            if (Date.now() - parsedCache.timestamp < 3600000) {
                return parsedCache.data;
            } else {
                localStorage.removeItem(cacheKey); // Remove cache expirado
            }
        }
        return null;
    }
}
