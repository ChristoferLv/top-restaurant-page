# Restaurant Page

Página de restaurante desenvolvida como parte da trilha JavaScript do [The Odin Project](https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page), com foco em **JavaScript modular** e **renderização dinâmica de conteúdo no DOM** usando bundling com **Webpack**.

## Objetivo do Projeto

O objetivo principal era praticar:
- Organização de código em múltiplos módulos ES
- Separação de responsabilidades por seção da interface
- Renderização de conteúdo da página inteiramente via JavaScript
- Navegação por abas (Home, Menu e Contact) sem recarregar a página
- Uso de Webpack para empacotamento de JavaScript, CSS, HTML e imagens

## O que é?

Uma aplicação web de restaurante com três seções principais:
- **Home**: apresentação do restaurante, horários e localização
- **Menu**: lista de lanches com nome, preço e ingredientes
- **Contact**: contatos para reservas, negócios e administração

## Como usar

1. Entre na pasta do projeto: `Javascript/top-restaurant-page`
2. Instale as dependências:
   `npm install`
3. Gere o build de desenvolvimento:
   `npx webpack`
4. Abra o arquivo `dist/index.html` no navegador

Opcional (desenvolvimento com atualização automática):
- `npx webpack --watch`
- `npx webpack serve`

## Funcionalidades

- **Navegação por abas**: troca dinâmica entre Home, Menu e Contact
- **Conteúdo modular**: cada aba é gerada por um módulo JavaScript separado
- **Renderização dinâmica**: o conteúdo é recriado no elemento `#content` conforme a aba selecionada
- **Indicador visual da aba ativa**: botão selecionado recebe classe de destaque
- **Layout e estilo centralizados**: CSS importado no entry point do projeto
- **Build com Webpack**: processamento de HTML, CSS e assets de imagem

## Estrutura de Código

- `src/index.js`: entry point e controle de navegação entre abas
- `src/scriptHome.js`: geração da seção Home
- `src/scriptMenu.js`: geração da seção Menu
- `src/contactScript.js`: geração da seção Contact
- `src/style.css`: estilos da interface
- `webpack.config.js`: configuração de bundling e loaders

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (ES Modules)
- Webpack 5
- html-webpack-plugin
- style-loader e css-loader
- html-loader

## Creditos das Imagens

- [Yasmine Duchesne](https://unsplash.com/pt-br/@y_duchesne)
- [Eiliv Aceron / shootdelicious](https://unsplash.com/pt-br/@shootdelicious)
- [Amirali Mirhashemian](https://unsplash.com/pt-br/@amir_v_ali)

---

Projeto desenvolvido seguindo: [The Odin Project - Restaurant Page](https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page)

📍 **Repositório principal com todos os projetos**: [ChristoferLv/TheOdinProject](https://github.com/ChristoferLv/TheOdinProject)
