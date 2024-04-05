# NLW-events-API

## Tabela de conteúdos
================================================
- [Sobre](#nlw-events-api)
- [Utilização](#como-utilizar-o-projeto)

## Sobre NLW-events-API

NLW-events-API é um projeto criado para ser o backend da aplicação 
<a href="https://github.com/Borguezani/NLW-events-REACT" target='_blank'>NLW-events-REACT</a>. É uma API que se comunica com o banco de dados através do Node.JS e prisma.


## Como Utilizar o Projeto

- O primeiro passo é instalar o <a href="https://nodejs.org/en" target='_blank'>Node.JS</a>
- Em uma pasta abra o terminal e execute os seguintes comandos:

```
git clone https://github.com/Borguezani/NLW-events-API.git
cd .\NLW-events-REACT\
npm install
```
- Agora abra com o seu editor de código
- Crie um arquivo .env usando o .env.example de base
- Coloque os dados do seu banco de dados no arquivo .env
- Abra o terminal e execute os seguintes comandos:
```
npx prisma db seed
npm run start

para abrir o banco de dados utilize:
npm run db:studio
```
- Seu servidor com a API já está em funcionamento!
- Lembre-se de rodar a aplicação front-end na URL http://localhost:3000 ou http://localhost:5173.
- Caso precise usar outra URL ir na pasta server.ts:
```js
app.register(fastifyCors, {
    origin: ["http://localhost:5173", "http://localhost:3000", "http://localhost:3001", "ADICIONE SUAS URLS AQUI"]
})
 ```
- Após alterar a url no arquivo server.ts rodar os comandos no terminal:

```
npm run build
npm run start
```
- Pronto seu servidor está em funcionamento!