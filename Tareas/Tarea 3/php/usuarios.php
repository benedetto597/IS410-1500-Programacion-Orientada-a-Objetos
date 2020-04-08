<?php
    header("Content-Type: aplication/json");
    include_once("../class/class-usuarios.php");
    switch($_SERVER['REQUEST_METHOD']){
        case 'PUT':
            $_PUT = json_decode(file_get_contents('php://input'), true);
            $usuario = new Usuario($_PUT["codigoUsuario"], $_PUT["nombreUsuario"], $_PUT["playlists"]);
            $usuario->agregarEnPlaylists($_GET['id']);
            break;
        case 'GET':
            Usuario::obtenerUsuarios();
            break;
    }
?>