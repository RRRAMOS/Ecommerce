const mongoose = require('mongoose');

function connect() {
    mongoose.connect('mongodb://localhost/clientes', { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log('Conectado ao banco de dados')
        }).catch((error) => {
            console.log(`Erro de conexão ao banco de dados ${error}`)
        })
}

module.exports = connect();