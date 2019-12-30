// Importa o módulo Mysql2
const mysql = require('mysql2');

// Cria a conexão com o banco
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'rs',
    password: ''
});

module.exports = connection