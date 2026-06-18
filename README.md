# 📰 Portal de Notícias PWA - Angular

Este é um projeto de um Portal de Notícias dinâmico desenvolvido em **Angular**, integrado com a **NewsAPI** para exibição de conteúdos informativos em tempo real totalmente em Português (Brasil).

## 🚀 Funcionalidades Principais
- **Feed por Categorias:** Abas dinâmicas que buscam notícias sobre Tecnologia, Esportes, Geral, Negócios, etc.
- **Detalhamento de Notícias:** Página dedicada para leitura aprofundada da matéria selecionada.
- **Gerenciamento de Favoritos:** Opção de favoritar / salvar notícias de interesse e visualizá-las de forma organizada na página de Perfil do Usuário
- **Armazenamento Local (Cache):** Desempenho otimizado e modo offline utilizando `LocalStorage`.
- **Notificações Push:** Avisos nativos no navegador quando novas notícias são carregadas.
- **Responsivo:** Layout adaptado para leitura em computadores e dispositivos móveis através do navegador Firefox no Lubuntu.

## 🛠️ Tecnologias Utilizadas
- **Angular** (Componentes Standalone e Roteamento)
- **TypeScript**
- **HTML5 & CSS3**
- **NewsAPI** (Serviço de busca de notícias globais)

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