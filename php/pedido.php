<?php

    include_once "./includes/cabecalho.php";
    include_once "./includes/menu.php";

?>
  <div class="alert alert-info" role="alert">
      
      <h2>Faça a Sua Encomenda</h2>

  </div>
    
<form class ="form-pedidos">
  <div class="form-group">
    <label for="nome">Nome</label>
    <input type="text" class="form-control" id="nome" placeholder="Digite seu nome e sobrenome"> <br><br>
    <label for="endereco">Endereço</label>
    <input type="text" class="form-control" id="endereco" placeholder="Digite o endereço para entrega"><br><br>
    <label for="fone">Telefone</label>
    <input type="text" class="form-control" id="fone" placeholder="Digite aqui"><br><br>
    <label for="CodProd">Cód do Produto</label>
    <input type="text" class="form-control" id="CodProd" placeholder="Digite aqui"><br><br>
    <label for="vUnit">Valor Unitário</label>
    <input type="text" class="form-control" id="vUnit" placeholder="Digite aqui"><br><br>
    <label for="vTot">Valor Total</label>
    <input type="text" class="form-control" id="vtot" placeholder="Digite aqui"><br><br>
    
    <button type="button" class="btn btn-success">Enviar</button>
    
  </div>
</form>

       
    <?php
    include_once "./includes/rodape.php";
    ?>