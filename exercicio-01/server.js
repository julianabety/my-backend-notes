const express = require("express"); // importa o módulo Express para criar um servidor web

const app = express(); // cria uma instância do Express

const PORT = 3000; // define a porta do servidor, usando a variável de ambiente PORT ou 3000 como padrão

app.use(express.json()); // ira converter o corpo da requisição para um objeto JavaScript

// json é um formato de dados leve e fácil de ler, usado para transmitir dados entre um servidor e um cliente. Ele é baseado em texto e é fácil de entender e usar. O JSON é amplamente utilizado em APIs para enviar e receber dados estruturados.

let usuarios = [ // array de objetos representando os usuários
    { id: 1, nome: "João", idade:25 },
    { id: 2, nome: "Maria", idade:26 }
 ]

 app.get("/usuarios", (req, res) => { // rota para obter a lista de usuários
    res.status(200).json(usuarios) // retorna a lista de usuários em formato JSON com status 200 (OK)
 });

app.listen(PORT, () => { // inicia o servidor na porta especificada
    console.log(`Servidor rodando na porta http://localhost:${PORT}/usuarios`); // exibe uma mensagem no console indicando que o servidor está rodando
});

app.post("/usuarios", (req, res) => { // rota para criar um novo usuário
    const { nome, idade } = req.body; // extrai o nome e a idade do corpo da requisição
    const id = usuarios.length + 1; // gera um ID simples baseado no tamanho do array
    const novoUsuario = { id, nome, idade }; // cria um novo objeto de usuário com o ID, nome e idade

    usuarios.push(novoUsuario); // adiciona o novo usuário ao array de usuários
    res.status(201).json(novoUsuario); // retorna o usuário criado com status 201 (Created)
});


// o que seria corpo da requisição? O corpo da requisição é a parte da mensagem HTTP que contém os dados enviados pelo cliente para o servidor. Ele é usado principalmente em requisições POST, PUT e PATCH para enviar informações como formulários, arquivos ou dados em formato JSON. O corpo da requisição pode ser acessado no servidor usando bibliotecas como express.json() para processar os dados recebidos.

// Foi criado o servidor e api ao mesmo tempo, o servidor é a aplicação que escuta as requisições e responde a elas, enquanto a API (Interface de Programação de Aplicações) é um conjunto de regras e definições que permitem que diferentes softwares se comuniquem entre si. No código fornecido, o servidor é criado usando o Express, e as rotas definidas (GET /usuarios e POST /usuarios) formam a API que permite interagir com os dados dos usuários.