const mysql = require ('mysql');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    port: "3306",
    database: "projeto_node",
    multipleStatements: true
})


db.connect((erro)=>{
    if (erro){
        throw erro;
    }
    console.log ("conexão efetuada com sucesso")
})

global.db = db;

module.exports = db;