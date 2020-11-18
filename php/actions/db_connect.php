    <?php

    $servidor = "localhost";
    $usuario = "root";
    $senha = "4809";
    $banco= "ecommercerecode";

    //criando a conexão
    $connect = mysqli_connect ($servidor, $usuario, $senha, $banco);


    //verificando a conexão

    if (!$connect) {
        die ("A conexão ao BD falhou" .mysqli_connect_error());
    }
    ?>
