# 📑 Changelog

Todas as mudanças importantes neste projeto serão documentadas aqui.

O formato segue [Conventional Commits](https://www.conventionalcommits.org/pt-br/v1.0.0/).

---

## [1.3.1] - 2025-04-27

### ✨ Features

- Adicionado suporte a variáveis de ambiente para configurações de banco de dados.
- Utilização de arquivos .env para gerenciar variáveis de configuração, como credenciais do banco de dados.
- Arquivo .env.example criado como modelo de configuração.

## [1.3.0] - 2025-04-27

### ✨ Features

- Adicionados testes de integração para os serviços de usuários (CRUD).
- Configuração de ambiente de testes com banco SQLite para testes de integração.
- Atualizadas dependências para garantir compatibilidade com o ambiente de testes.

## [1.1.0] - 2025-04-27

### ✨ Features

- Criada camada de serviço para usuários (`user.service.js`) separando lógica do controller.
