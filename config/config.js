module.exports = {
  development: {
    username: "postgres", // Seu usuário do PostgreSQL
    password: "senha", // Sua senha do PostgreSQL
    database: "testdb", // Nome do banco de dados
    host: "localhost", // O host do banco de dados
    dialect: "postgres", // Dialeto do PostgreSQL
    dialectOptions: {
      ssl: false, // Se necessário, pode ajustar isso conforme sua configuração de SSL
    },
  },
  test: {
    username: "root",
    password: null,
    database: ":memory:", // Usando o banco em memória
    host: "127.0.0.1",
    dialect: "sqlite", // SQLite para testes em memória
  },
};
