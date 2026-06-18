# 📰 Web App de Notícias Personalizadas com Angular

Este é um projeto de um Portal de Notícias dinâmico desenvolvido em **Angular**, integrado com a **NewsAPI** para exibição de conteúdos informativos em tempo real totalmente em Português (Brasil).

## 🚀 Funcionalidades Principais
- **Feed por Categorias:** Abas dinâmicas que buscam notícias sobre Tecnologia, Esportes, Geral, Negócios, etc.
- **Autenticação de Usuário e Personalização:** O sistema conta com um módulo completo de Login e Cadastro para personalização da experiência
- **Interface do Usuário:** A interface foi projetada seguindo as melhores práticas de Design Responsivo e componentização do Angular:
- **Detalhamento de Notícias:** Página dedicada para leitura aprofundada da matéria selecionada.
- **Gerenciamento de Favoritos:** Opção de favoritar / salvar notícias de interesse e visualizá-las de forma organizada na página de Perfil do Usuário
- **Armazenamento Local (Cache):** Desempenho otimizado e modo offline utilizando `LocalStorage`.
- **Notificações Push:** implementação utilizando a **Web Notifications API** nativa. Como o escopo principal do projeto foca em uma aplicação Web de alta performance (Single Page Application) executada em navegadores, a API nativa oferece uma integração mais limpa.
- **Responsivo:** Layout adaptado para leitura em computadores e dispositivos móveis através do navegador Firefox no Lubuntu.

## 🛠️ Tecnologias Utilizadas
- **Angular** (Componentes Standalone e Roteamento)
- **TypeScript**
- **HTML5 & CSS3**
- **NewsAPI** (Serviço de busca de notícias globais)
- **Sistema de Notificações Web (Push Alerts)**
- **LocalStorage**
- **Toda a inteligência de autenticação e armazenamento foi feita de forma 100% local, rodando direto no próprio navegador do usuário (Client-Side).**

## 🔧 Como Executar o Projeto

1. Certifique-se de ter o `Node.js` instalado.
2. Instale as dependências do projeto acessando a pasta `app` no Angular News e digite no seu terminal:
   ```bash
   npm install
3. Para inicializar o Servidor de desenvolvimento:
   ```bash
   ng serve
4. Se preferir abrir pelo navegador que já estiver aberto, coloque assim:
   ```bash
   ng serve --open
5. Feito isso, você vai poder acessar o seguinte endereço:
   ```bash
   http://localhost:4200      

## Prints do projeto Web Angular: 

<div class="login_auth / app angular">
  <p>Esta é a página de Login pedindo a verificação para preencher todos os campos!</p>
  <img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/c2d3b0c2-506e-4407-a730-2ac1229cb564" />
</div>

----

<div class="register_auth / app angular">
  <p>Esta é a página de Registrar sua conta, caso não possua!</p>
  <img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/1566f350-55fe-425e-878a-c702444ea492" />
</div>

----

<div class="home_notifications / app angular">
  <p>Esta é a página Home (principal) onde a mágica acontece, onde você pode ver as noticias, ir para o site principal das noticias em "Ler mais" e favoritar alguma noticia e também receber as notificacoes das noticias que foram atualizadas.</p>
  <img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/06295e57-a744-4b8d-9e8a-aeb5ea756aea" />
</div>

----

<div class="profile_favorites_news / app angular">
  <p>E esta é página de seu perfil, onde pode visualizar as noticias que foram favoritas</p>
  <img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/b31038a1-2f7a-41a8-b26e-da0daed84085" />
</div>
