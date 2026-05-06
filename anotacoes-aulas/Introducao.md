# 🌐 Guia de Estudos: Fundamentos do Back-End

Este material documenta meus estudos sobre a parte "invisível" dos sistemas, focando na lógica, comunicação e estruturação de dados.

---

## 🏗️ O que é Back-End?

O Back-End é a parte que fica por trás das telas. Ele não aparece para o usuário, mas é o responsável por fazer o sistema funcionar. É onde ficam as **regras de negócio**, os **dados** e a **lógica** da aplicação.

**É onde ficam as regras, os dados e a lógica da aplicação.

### O papel do Back-End:
*   **Guardar dados:** Armazenamento seguro de informações.
*   **Processar informações:** Cálculos e transformações de dados.
*   **Aplicar regras:** Validar o que pode ou não ser feito.
*   **Conversar com o banco de dados:** Buscar e salvar registros.
*   **Responder ao Front-End:** Entregar o que foi solicitado.

> **💡 Conclusão:** O Front-end pede e o Back-end decide e responde. Sem o back-end, o site até pode existir, mas não "funciona de verdade".

---

## 🔄 Como funciona o fluxo?
O ciclo de funcionamento segue este caminho:
`Front faz uma requisição` ➔ `Back verifica/analisa` ➔ `Banco de Dados participa` ➔ `Back responde ao Front` ➔ `Front mostra na tela`.


Por exemplo: Fiz um sistema e criei novos usuários, para eu verificar se aquele usuário existe ou não, o front irá enviar um requisição para o back-end para analisar os dados
e vê qual a situação daquele usuáiro ou não e retorna uma resposta se aquele usuáiro existe ou não, se existe vai entrar no sistema normalmente. Caso não, não vai conseguir acessar e irá informar que aquele usuario não é válido.


**Exemplo prático de Login:**
*   **Front-end:** "Ei Back, aqui está o e-mail `juliana@email.com` e a senha `123`. Posso entrar?"
*   **Back-end:** "Espera aí... vou checar." (Consulta o Banco de Dados).
*   **Banco de Dados:** "Achei! O e-mail existe e a senha bate."
*   **Back-end:** "Beleza! Front, aqui está o sinal verde (**Status 200**) e os dados do perfil dela."
*   **Front-end:** (Renderiza o Dashboard para o usuário).

** Front-end pede e o Back-end decide e irá responder.

---

## 👥 O Modelo CLIENT - SERVER
De forma simples podemos dizer que o CLIENTE  é que faz o pedido de requisação, ou seja, é que o solicita. Já o SERVIDOR é que receba essa requisição e envia uma resposta para o CLIENTE.

*   **CLIENTE (Solicitante):** É quem faz o pedido de requisição. Pode ser o navegador (Chrome, Firefox), um aplicativo ou um sistema consumindo API. **Ele não guarda dados**, apenas solicita.
*   **SERVIDOR (Provedor):** É um computador/software sempre ligado esperando o "pedido". Ele armazena informações, valida dados, aplica regras e responde ao cliente.

---


## 📡 Comunicação CLIENTE - SERVER (HTTP)


É feito através do protocolo HTTP (Hyper Text Transfer Protocol), ele foi feito para responder o status daquela requisação. Por exemplo:
O Front vai pedi pra entrar com um usuário e ele vai ficar se existe ou não, se existe vai retornar o HTTP 200 e caso contrário retornará por exemplo HTTP 404.

 ### Isso é chama da STATUS CODE, é o que mostra do pedido do cliente para o servidor. 

*   **O HTTP** é o Mensageiro (o protocolo/correio).
*   **A Requisição** é a Carta que o Cliente envia.
*   **O Status Code** é o Carimbo de Retorno que diz se houve sucesso ou erro.

### 📝 Requisição - Verbos HTTP (CRUD)

É o que identifica o que o cliente está solicitando para o servidor, abaixo temos os seguintes verbos/métodos e suas ações e chamamos esse conjunto de (Create, Read, Update, Delete) de CRUD :

| Verbo HTTP | Ação CRUD | Descrição | Exemplo |
| :--- | :--- | :--- | :--- |
| **POST** | **C**reate | Adicionar novas informações. | Criar um novo usuário. |
| **GET** | **R**ead | Visualizar informações existentes. | Retornar a lista de usuários. |
| **PUT** | **U**pdate | Atualizar uma informação existente. | Editar o nome de um usuário. |
| **DELETE** | **D**elete | Apagar dados. | Deletar um usuário do sistema. |


Ou seja, através desses verbos o servidor irá entender o que o cliente está solicitando e irá responder conforme a solicitação e dependendo da ação do usuário retornará um STATUS CODE.

### 🌡️ Status Code (O Termômetro)
*   **Família 1xx:** "Peraí" (Informação).
*   **Família 2xx:** "Tudo certo" (Sucesso - Ex: `200 OK`).
*   **Família 4xx:** "Você errou" (Erro do Cliente - Ex: `404 Not Found`).
*   **Família 5xx:** "Eu errei" (Erro do Servidor - Ex: O servidor "quebrou").

---

## 📍 Endpoints

Endpoints são os caminhos (URLs) onde a requisição chega no servidor. É onde ele irá processar o que foi pedido.

*   `GET` ➔ `/produtos` (Buscar todos os produtos)
*   `GET` ➔ `/produtos/1` (Buscar produto específico)
*   `POST` ➔ `/produtos` (Criar novo produto)
*   `PUT` ➔ `/produtos/1` (Atualizar produto específico)
*   `DELETE` ➔ `/produtos/1` (Excluir produto específico)

---

## 🏁 Ciclo Completo da Web
1. O **Cliente** decide a ação.
2. Escolhe o **Verbo** (Ação).
3. Mira no **Endpoint** (Endereço).
4. O **Mensageiro (HTTP)** leva o pedido.
5. O **Servidor** processa e carimba com um **Status Code**.





