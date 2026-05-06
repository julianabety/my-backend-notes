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
### Como iniciar o Node.js?
Para iniciar o projeto com Node.js, vá ao terminal e digite o comando abaixo. Ele iniciará o servidor e criará o arquivo `package.json`:


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
O **`.gitignore`**, é muito importante lembrar que a pasta `node_modules` é extremamente pesada e nunca deve ser enviada para o GitHub. O arquivo `package.json` 
é quem "guarda a lista" do que precisa ser instalado; quando outra pessoa baixar o projeto, ela só precisará rodar um `npm install` para recuperar tudo.

---
# Estrutura do Arquivo server.js

## Para que serve o server.js?
O arquivo `server.js` é o **ponto de entrada** para o nosso servidor web. Ele é responsável por configurar e iniciar o servidor, definindo as rotas e o comportamento do aplicativo. 

Quando executamos o comando `node server.js`, o Node.js lê esse arquivo, cria o servidor e começa a escutar as requisições na porta especificada (neste caso, a porta 3000.
Assim, quando um usuário acessa `http://localhost:3000`, o servidor responde com "Hello World!" conforme definido na rota.

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

// Para executar o servidor, basta usar o comando "node server.js" no terminal. Depois disso, você pode abrir um navegador e 
acessar http://localhost:3000 para ver a mensagem "Hello World!" sendo exibida

---
# Facilitando o Desenvolvimento (Auto-reload)

No dia a dia, ficar parando e reiniciando o servidor manualmente a cada pequena alteração no código é cansativo. Para resolver isso, usamos ferramentas 
que observam as mudanças nos arquivos e reiniciam o servidor automaticamente.

### 1. Node --watch (Nativo)
A partir das versões mais recentes do Node.js, foi incluída uma função nativa de "observação". Para usá-la, basta rodar:

```bash
node --watch server.js

### 2. Nodemon (Pacote Externo)
O **Nodemon** é uma das ferramentas mais clássicas para reiniciar o servidor automaticamente. A instalação utilizando a flag completa:

**Como instalar:**
npm install --save-dev nodemon

**Por que usar --save-dev?**
Essa flag indica que o Nodemon é uma dependência de desenvolvimento. Isso significa que ele só é necessário enquanto estamos construindo o código na nossa máquina. 
Quando o sistema for publicado (produção), ele não será instalado, deixando o projeto mais leve e seguro.

**Como executar via terminal:**
npx nodemon server.js

**Configuração de Atalhos (Scripts)**
Para facilitar a execução, configuramos "atalhos" dentro do arquivo package.json na seção de "scripts". Isso evita ter que digitar comandos longos toda vez.

**Exemplo de configuração no package.json:**
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}

**Como usar os atalhos:**

Para rodar o servidor normalmente: npm start

Para rodar com o Nodemon (auto-reload): npm run dev

---
# Variavél de Ambiente

## .env o que é?
O arquivo .env serve para armazenar variáveis de ambiente, como senhas, chaves de API, etc. Ele é útil para manter essas informações fora do código-fonte e facilitar a configuração entre os ambientes de desenvolvimento e produção.

No caso do projeto em execução, o arquivo .env pode conter variáveis como a porta do servidor, a URL do banco de dados, ou outras configurações específicas.

🚨 Segurança: O arquivo .env deve ser adicionado obrigatoriamente no .gitignore para que essas informações sensíveis não se tornem públicas no GitHub.

Exemplo prático de um arquivo .env:

PORT=3000           # Porta onde o servidor irá rodar
DB_HOST=localhost   # Host do banco de dados
DB_USER=root        # Usuário do banco de dados
DB_PASSWORD=senha   # Senha do banco de dados

---
# Gerenciamento de Variáveis com Dotenv

## O que é o Dotenv?
É um pacote que carrega variáveis de ambiente de um arquivo `.env` para o `process.env`. Isso permite que o código JavaScript acesse as configurações que definimos fora do código-fonte.

### 📥 Instalação
Para utilizar, precisamos instalar o pacote no projeto:

```bash
npm install dotenv

### Como utilizar no código?
Para que o servidor reconheça as variáveis do arquivo .env, precisamos importar e configurar o dotenv logo no início do arquivo principal (server.js ou app.js).

Exemplo de Configuração no server.js:

// Importando o dotenv
require('dotenv').config();

// Agora podemos acessar a variável PORT que definimos no .env
const port = process.env.PORT || 3000;

console.log(`O servidor está rodando na porta ${port}`);

### 🛠️ Por que o Dotenv é importante?
1. Segurança: Impede que dados sensíveis (como senhas de banco de dados) fiquem expostos no código enviado para o GitHub.

2. Flexibilidade: Permite mudar a porta ou o banco de dados sem precisar alterar a lógica do código principal.

3. Ambientes: Facilita ter configurações diferentes para o seu computador (desenvolvimento) e para o servidor onde o site ficará hospedado (produção).

4. Nota: Sempre que adicionar ou alterar uma variável no .env, o servidor precisa ser reiniciado (o Nodemon faz isso !)


