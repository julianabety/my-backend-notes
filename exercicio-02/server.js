require('dotenv').config(); // Carrega as variáveis de ambiente do arquivo .env
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

let cadastros = [];

let proximoId = 1;

//Validações
function emailValido(email){
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expressão regular para validar o formato do email
    return regexEmail.test(email); // Retorna true se o email for válido, false caso contrário
}

function telefoneValido(telefone){
    const regexTelefone = /^\d{10,11}$/; // Expressão regular para validar o formato do telefone (apenas dígitos, com 10 ou 11 caracteres)
    return regexTelefone.test(telefone); // Retorna true se o telefone for válido, false caso contrário
}

// Middleware para validar os dados de cadastro
function validarCadastro(req, res, next) { // Função middleware para validar os dados de cadastro
    const { nome, email, telefone, mensagem } = req.body;

    if (!nome || nome.length < 3){
        return res.status(400).json({ error: 'O nome é obrigatório e deve conter pelo menos 3 caracteres.' });
    }

    if (!email || !emailValido(email)){
        return res.status(400).json({ error: 'O email é obrigatório e deve ser um email válido.' });
    }

    if (!telefone || !telefoneValido(telefone)){
        return res.status(400).json({ error: 'O telefone é obrigatório e deve ser um número de telefone válido (10 ou 11 dígitos).' });
    }

    if (mensagem && mensagem.length > 500){
        return res.status(400).json({ error: 'A mensagem deve conter no máximo 500 caracteres.' });
    }

    next(); // Chama o próximo middleware se todos os dados forem válidos
}

app.use(express.json());

app.get('/cadastros', (req, res) => {
    res.status(200).json(cadastros);
});

app.post('/cadastros', validarCadastro, (req, res) => { // Rota para criar um novo cadastro, utilizando o middleware de validação
    const { nome, email, telefone, mensagem } = req.body; // Desestruturação dos dados do corpo da requisição

    const novoCadastro = {  // Criação de um novo objeto de cadastro
        id: proximoId++,
        nome,
        email,
        telefone,
        mensagem: mensagem || null // Atribui null se a mensagem não for fornecida
    };

    cadastros.push(novoCadastro); // Adiciona o novo cadastro à lista

    res.status(201).json({
        message: 'Cadastro criado com sucesso',
        cadastro: novoCadastro
    }); // Retorna uma resposta de sucesso com o novo cadastro

});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
});