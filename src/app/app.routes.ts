import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Profile } from './pages/profile/profile';
import { Home } from './pages/home/home';
import { NewsDetail } from './pages/news-detail/news-detail';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },

    // Rotas para as páginas
    { path: 'login', component: Login },
    { path: 'register', component: Register },

    // Rotas principais do aplicativo
    { path: 'home', component: Home },
    { path: 'profile', component: Profile },
    { path: 'news-detail', component: NewsDetail } // Adicionando a rota para a página de notícias
];
