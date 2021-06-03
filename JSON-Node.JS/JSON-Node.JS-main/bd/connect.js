const mysql = require('mysql')
const connect = mysql.createConnection({
    host: 'localhost', 
    user: 'root',
    password: '',
    database: 'projeto_node'
})


 module.exports=connect