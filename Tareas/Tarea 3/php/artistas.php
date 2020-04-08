<?php
    header("Content-Type: aplication/json");
    include_once("../class/class-artistas.php");
    switch($_SERVER['REQUEST_METHOD']){
        case 'GET':
            Artista::obtenerArtistas();
            break;
    }
?>