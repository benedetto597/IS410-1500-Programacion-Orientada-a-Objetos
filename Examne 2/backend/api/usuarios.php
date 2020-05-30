<?php
    header("Content-Type: aplication/json");
    include_once("../class/class-usuarios.php");
    switch($_SERVER['REQUEST_METHOD']){
        case 'GET':
            Usuario::obtenerUsuarios();
            break;
        case 'PUT':
            $_PUT = json_decode(file_get_contents('php://input'), true);
            $usuario = new Usuario($_PUT["idUsuario"], $_PUT["nombre"], $_PUT["apellido"],$_PUT["ordenes"]);
            $usuario->actualizarUsuario($_GET['id']);
            break;
    }
?>