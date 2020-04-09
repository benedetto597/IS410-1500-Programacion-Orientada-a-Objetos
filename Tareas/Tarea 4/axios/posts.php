<?php
    header("Content-Type: aplication/json");
    include_once("../class/class-posts.php");
    switch($_SERVER['REQUEST_METHOD']){
        case 'POST':
            $_POST = json_decode(file_get_contents('php://input'), true);
            $post = new Post($_POST["codigoPost"], $_POST["codigoUsuario"], $_POST["contenidoPost"],$_POST["imagen"], $_POST["cantidadLikes"] );
            $post->agregarPost();
            break;
        case 'PUT':
            $_PUT = json_decode(file_get_contents('php://input'), true);
            $post = new Post($_PUT["codigoPost"], $_PUT["codigoUsuario"], $_PUT["contenidoPost"],$_PUT["imagen"], $_PUT["cantidadLikes"] );
            $post->actualizarPost($_GET['id']);
            break;
        case 'GET':
            Post::obtenerPosts();
            break;
    }
?>