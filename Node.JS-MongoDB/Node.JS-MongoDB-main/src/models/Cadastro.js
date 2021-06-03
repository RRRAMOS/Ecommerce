const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Cadastro = new Schema({
    nome: {
        type: String,

    },
    email: {
        type: String,

    },
    telefone: {
        type: Number,

    },
    endereco: {
        type: String,

    },
    profissao: {
        type: String,

    }
})

mongoose.model('cadastro', Cadastro)