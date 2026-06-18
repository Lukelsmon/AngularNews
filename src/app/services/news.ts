import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class News {
  constructor(private http: HttpClient) {}
  
  getNewsByCategory(category: string) {
    const apiKey = 'dd274e680ff84a5f8cb20668820c0ccd'; // Sua API KEY mantida
    
    if (category === 'general') {
      const url = `https://newsapi.org/v2/everything?q=Brasil&language=pt&sortBy=publishedAt&apiKey=${apiKey}`;
      return this.http.get(url);
    } 
    
    // Mantém as outras abas de categoria, como 'business', 'entertainment', 'health', 'science', 'sports' e 'technology'
    const url = `https://newsapi.org/v2/everything?q=${category}&language=pt&sortBy=publishedAt&apiKey=${apiKey}`;
    
    return this.http.get(url);
  }
}