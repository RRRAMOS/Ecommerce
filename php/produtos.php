
<?php

include_once "./includes/cabecalho.php";
include_once "./includes/menu.php";


?>
 <div class="alert alert-info" role="alert">
    <h2> Produtos a Pronta Entrega</h2>
</div>
    
<div class="container-categoria">
<h4>Categoria<h6>
    <ul class="nav nav-tabs">
        <li class="nav-item">
            <a class="nav-link active" href="#">Arranjos</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Brinquedos</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Luminárias</a>
        </li>
    </ul>
</div>

    <div class="produto">

    <?php
        require_once "./actions/db_connect.php";

        $sql = "SELECT * FROM produto";
        $resultado = mysqli_query($connect, $sql);

        while($row=mysqli_fetch_assoc($resultado)){
            
    ?>


        <div class="produto">
        <div class="imagem">
            <figure>
                <img srcset ="../imagens/<?php echo $row ['NomeImagem']; ?>">
                <figcaption>
                    <p><?php echo $row ['NomeProduto']; ?></p>
                    <p><?php echo $row ['Preco']; ?></p>
                </figcaption>
            </figure>
        </div>
    <?php
        }
    ?>
</div>
</div>
<?php
    include_once "./includes/rodape.php";
?>