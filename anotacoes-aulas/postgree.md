# 🐘 PostgreSQL

O **PostgreSQL** é o SGBD (Sistema de Gerenciamento de Banco de Dados) que utilizaremos nas aulas. Ele é um banco de dados **Relacional** (SQL) de código aberto e um dos mais avançados do mercado.

## Por que usar o PostgreSQL?

* **Confiabilidade:** É conhecido por sua forte conformidade com os princípios **ACID**, garantindo que os dados nunca sejam perdidos ou corrompidos em caso de falhas.
* **Extensível:** Permite trabalhar com dados complexos, inclusive suportando tipos de dados JSON (o que o torna híbrido entre Relacional e Não Relacional em alguns casos).
* **Comunidade:** Por ser Open Source, possui uma comunidade gigante, o que facilita encontrar soluções para dúvidas e problemas.

---

## Estrutura de Dados no Postgres

No Postgres, seguimos a hierarquia padrão dos bancos relacionais:
1.  **Instância:** O servidor do Postgres rodando.
2.  **Database:** O banco de dados específico do seu projeto.
3.  **Schema:** Uma forma de organizar as tabelas dentro do banco (o padrão é o `public`).
4.  **Tabelas:** Onde os dados realmente moram (Linhas e Colunas).

---

## Ferramentas de Acesso

Para interagir com o PostgreSQL, geralmente usamos:

* **psql:** Interface de linha de comando (terminal).
* **pgAdmin / DBeaver:** Interfaces gráficas (GUI) que facilitam a visualização das tabelas e a escrita de queries sem precisar apenas do terminal.



---

## Comandos Iniciais (SQL)

Aqui estão alguns comandos básicos que você verá logo no início:

```sql
-- Criar uma tabela de usuários
CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL
);

-- Inserir um dado
INSERT INTO usuarios (nome, email) 
VALUES ('Juliana', 'juliana@email.com');

-- Consultar dados
SELECT * FROM usuarios;