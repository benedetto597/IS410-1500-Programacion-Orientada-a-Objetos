<?php
    header("Content-Type: aplication/json");
    include_once("../class/class-usuarios.php");
    switch($_SERVER['REQUEST_METHOD']){
        case 'POST':
            $_POST = json_decode(file_get_contents('php://input'), true);
            $usuario = new Usuario($_POST["codigoUsuario"], $_POST["nombreUsuario"], $_POST["playlist"]);
            //Mandar los datos que pide la función sacandolo de $_POST
            $usuario->guardarEnPlaylist();
            break;
        case 'GET':
            Usuario::obtenerUsuarios();
            break;
    }
?>