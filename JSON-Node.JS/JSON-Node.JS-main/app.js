const express = require("express");
const app = express();

const connect = require('./bd/connect')
app.use(express.json())

//para visualizar dados
app.get('/adicionar', (req, res) => {
    connect.query("select * from conteudo",  (error, result)  => {
         res.json( result) 
        });
    });

app.post('/salvar', (req, res) =>{
     let dados=[]

     dados.push({
         onteudo:req.body.conteudo,
        categoria:req.body.categoria,
    });

    connect.query('INSERT INTO conteudo SET?',dados, () => {
        dados =[];
        res.json({mensagem:"Enviado com Sucesso"})
    })
})

app.listen(3030, () => {
  console.log("Servidor Ativo na porta 3030");
});



