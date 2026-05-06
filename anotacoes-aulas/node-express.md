# Fundamentos de Node.js e Express

## O que é o Node.js?

O Node.js foi criado em 2009 pelo engenheiro **Ryan Dahl**. Antes de sua criação, o JavaScript funcionava apenas no front-end (navegador). Naquela época, o back-end era dominado por outras linguagens como Java e PHP. Lembrando que ele não é uma linguagem de programação, e sim um ambiente de execução criado para executar o JavaScript no back-end, nisso irá transformar o nosso computador em um servidor.

Pensando nisso, o Node.js foi desenvolvido para permitir a execução do **JavaScript também no back-end**. Isso possibilitou que desenvolvedores utilizassem a mesma linguagem para:
* Criar APIs;
* Construir servidores;
* Desenvolver sistemas complexos, entre outros.

---

## Para que serve o Node.js?

Ele é o motor responsável pela criação do **SERVIDOR**, permitindo que ele receba e processe as requisições enviadas pelo **CLIENTE**.

---

## O que é Express?

O **Express** é um *framework* para Node.js. Ele funciona como um conjunto de ferramentas que **simplifica o processo de criação** de aplicativos web e APIs. 

Sem o Express, criar um servidor com Node puro exige muito mais linhas de código. O Express torna esse processo mais rápido, organizado e fácil de dar manutenção.

---

## Configuração do Node.Js e Express

### Como executar o Node.js?
## Configuração do Node.js e Express

### Como iniciar o Node.js?
Para iniciar o projeto com Node.js, vá ao terminal e digite o comando abaixo. Ele iniciará o servidor e criará o arquivo `package.json`:

```bash
npm init -y

### Como executar o Express?
Para instalar o framework no seu projeto, digite no terminal:

npm install express

Este comando instalará o Express, criará a pasta node_modules e atualizará o arquivo package.json com a nova dependência.

---
### Configuração do Servidor
Para colocar o sistema de pé, seguimos estes passos iniciais:

1. Criar o arquivo server.js: Onde ficará o código principal do servidor.

2. Criar o arquivo .gitignore: Arquivo para listar o que não deve subir para o GitHub.

    Exemplo de itens no .gitignore:

    node_modules

    .env

    Senhas de API

3. Criar o arquivo .env: Onde guardamos variáveis de ambiente sensíveis.

### 💡 Dica:
O **`.gitignore`**, é muito importante lembrar que a pasta `node_modules` é extremamente pesada e nunca deve ser enviada para o GitHub. O arquivo `package.json` é quem "guarda a lista" do que precisa ser instalado; quando outra pessoa baixar o projeto, ela só precisará rodar um `npm install` para recuperar tudo.

---
# Estrutura do Arquivo server.js

## Para que serve o server.js?
O arquivo `server.js` é o **ponto de entrada** para o nosso servidor web. Ele é responsável por configurar e iniciar o servidor, definindo as rotas e o comportamento do aplicativo. 

Quando executamos o comando `node server.js`, o Node.js lê esse arquivo, cria o servidor e começa a escutar as requisições na porta especificada (neste caso, a porta 3000). Assim, quando um usuário acessa `http://localhost:3000`, o servidor responde com "Hello World!" conforme definido na rota.

---

## Código Comentado do Servidor
```javascript
// Estamos importando o express, que é um framework para criar servidores web em Node.js.
// Ele facilita a criação de rotas e o gerenciamento de requisições e respostas HTTP.
const express = require('express');

// Aqui estamos criando uma instância do express, que é o nosso aplicativo.
// Com essa instância, podemos definir rotas e configurar o comportamento do servidor.
const app = express();

// Definindo a porta em que o servidor irá escutar as requisições.
// Neste caso, estamos usando a porta 3000, mas pode escolher qualquer porta disponível.
const PORT = 3000; 

// Nesta linha, estamos definindo uma rota para a raiz do nosso servidor ("/").
// Quando um usuário acessar essa rota, o servidor responderá com "Hello World!".
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Finalmente, estamos iniciando o servidor para que ele comece a escutar as requisições.
// Quando o servidor estiver rodando, ele exibirá uma mensagem no console.
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Para executar o servidor, basta usar o comando "node server.js" no terminal. Depois disso, você pode abrir um navegador e acessar http://localhost:3000 para ver a mensagem "Hello World!" sendo exibida

