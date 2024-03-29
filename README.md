# Arround the World

 Projeto de exibição de caracteristicas de Pais
 
 <a href="https://arround-world.vercel.app/">Clique aqui para acessar a pagina e ver minha aplicação</a>


<a href="https://github.com/carlosbandelli">
<img alt="Autor" src="https://img.shields.io/badge/autor-CarlosBandelli-004400?style=flat-square">
</a>

<a href="#">
<img alt="Linguagens" src="https://img.shields.io/github/languages/count/carlosbandelli/Arround_world?color=004400&style=flat-square">
</a>

<a href="#">
<img alt="Tamanho do código em bytes" src="https://img.shields.io/github/languages/code-size/carlosbandelli/Arround_world?color=004400&style=flat-square">
</a>

<a href="https://github.com/carlosbandelli/Cards/commits/main">
<img alt="Commits" src="https://img.shields.io/github/last-commit/carlosbandelli/Cards?color=004400&style=flat-square">
</a>
<hr/>

<div style="margin: 0 auto;">
<img src="asset_Readme/films.gif">
</div>

## 💡 Sobre o projeto:

O projeto visa desenvolver uma aplicação web utilizando as tecnologias Vite.js, React.js, Axios, Typescript e Tailwind. O objetivo é criar uma plataforma para consulta de informações de países, integrando a API RestCountries <a href="https://restcountries.com/">https://restcountries.com/</a>, proporcionando uma experiência de usuário clara e diferenciada.

##🔥 Quais são as funcionalidades?

As funcionalidades exigidas incluem a busca por nome de país com opção de exibição em formato de tabela ou em um formato diferente definido pelo desenvolvedor, além de apresentar informações como nome, capital, população, moeda e idioma. Requisitos opcionais envolvem a representação gráfica do país e a capacidade de exportar o histórico de consultas em formato CSV ou planilha. A estrutura do código deve ser modular e reutilizável, com tratamento de erros da API e feedback visual para o usuário, como ícones de carregamento e cabeçalhos de tabela claros.<br/>


## ⚙️ Techs:
### 📺 FRONT-END
- <img src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg" width="20" height="20"> Vite.js
- <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" width="20" height="20"> React.js
- <img src="https://github.com/axios/axios-docs/blob/908d04c524e088ae7fde8a57a527e54710a4a5ab/assets/logo.svg" width="20" height="20"> Axios
- <img src="https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png" width="20" height="20"> Typescript
- <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" width="20" height="20"> Tailwind CSS

<hr/>

## ⛏ Ferramentas:

- [Visual Studo Code](https://code.visualstudio.com/download)

## 🏁 Configuração ambiente:

Para executar a aplicação:
Precisa fazer o git clone do projeto<br/>
Fique á vontade para clonar de quaisquer uma das seguintes chaves na sua maquina<br/>

#### Chave SSH:
```
 git clone git@github.com:carlosbandelli/Arround_world.git
```

#### Chave HTTPS:
```
git clone https://github.com/carlosbandelli/Arround_world.git

```
### 📺 FRONT-END:

Se voce não tiver PNPM instaldo em sua maquina rode o comando
```
pnpm install -g pnpm
```

para verificar se foi instalado use o comando

```
pnpm -v
```

Abra um terminal direto da pasta raiz a pasta SRC e execute o comando no terminal

```
pnpm install
```

# Importante, para se fazer requisição crie um arquivo <strong>.env</strong> na raiz do projeto igual imagem abaixo:

<img src="asset_Readme/env-example.png">

Para facilitar a criação do arquivo <strong>.env</strong>, existem um arquivo chamado <strong>.env-example</strong>, renomei o arquivo para <strong>.env</strong> e apague o que tem no arquivo e coloque o código abaixo:

```
REACT_APP_BASE_URL=https://restcountries.com/v3.1/

```

 Nesta parte apos instalar as dependencia, abra um terminal direta da pasta SRC e utilize o comando:
 
 ```
 pnpm run dev
 
 ``` 
Pronto projeto rodando!







