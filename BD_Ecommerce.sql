use ecommercerecode;
CREATE TABLE IF NOT EXISTS Produto (
CodProduto integer primary key auto_increment,
NomeProduto varchar (45),
Descricao varchar (45),
Preco varchar (45),
NomeImagem varchar (45)
);

CREATE TABLE IF NOT EXISTS Pedidos (
CodPedido integer  primary key auto_increment,
NomeCliente varchar (45),
Endereco varchar (45),
Telefone varchar (15),
ValorUnit varchar (15),
CodProduto integer,
Qtde int (15),
ValorTotal varchar (15),
Foreign Key (CodProduto) REFERENCES Produto(CodProduto)
);






