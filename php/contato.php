
<?php

     include_once "./includes/cabecalho.php";
     include_once "./includes/menu.php";


 ?>
    <div class="alert alert-info" role="alert">        
        <h2>Fale Conosco</h2>
    </div>
    
     <form>
        <div class="form-group">
            <label for="nome">Nome Completo</label>
            <input type="text" class="form-control" id="nome" placeholder="Informe seu Nome e Sobrenome">
        </div>
        <div class="form-group">
            <label for="email">Email</label>
            <input type="text" class="form-control" id="email" placeholder="Informe seu e-mail">
        </div>
        <div class="form-group">
            <label for="msg">Mensagem</label>
            <input type="text" class="form-control" id="msg" placeholder="Registre sua dúvida, crítica, sugestão ou elogio. É sempre uma satisfação receber o seu contato">
        </div>

        <button type="button" class="btn btn-success">Enviar</button>
    </form>


<?php

    include_once "./includes/rodape.php";


?>

