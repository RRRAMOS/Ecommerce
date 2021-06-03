const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.use(express.json())
require('./src/models/Cadastro')
require('./src/db/connect')
const cors = require('cors');

app.use(cors());
const Cadatro = mongoose.model('cadastro')

app.post('/Formulario', async (req, res) => {
    const novoCadastro = new Cadatro({
        nome: req.body.nome,
        email: req.body.email,
        telefone: req.body.telefone,
        endereco: req.body.endereco,
        profissao: req.body.profissao
    })
    novoCadastro.save()
    return res.json({ menssage: 'Cadastro Realizado', cadastro: novoCadastro })
})

app.get('/Formulario', cors(), async (req, res) => {
    const cadastroResponse = await Cadatro.find()
    const cadastroJSON = await cadastroResponse;
    return res.json(cadastroResponse)
})



const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log(`Servidor ativo! Porta:${PORT}`)
})