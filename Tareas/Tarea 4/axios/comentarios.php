<?php
    header("Content-Type: aplication/json");
    include_once("../class/class-comentarios.php");
    switch($_SERVER['REQUEST_METHOD']){
        case 'POST':
            $_POST = json_decode(file_get_contents('php://input'), true);
            $comentario = new Comentario($_POST["codigoComentario"], $_POST["codigoPost"], $_POST["usuario"], $_POST["comentario"]);
            $comentario->agregarComentario();
            break;
        case 'GET':
            Comentario::obtenerComentarios();
            break;
    }
?>