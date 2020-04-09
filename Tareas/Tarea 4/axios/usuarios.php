<?php
    header("Content-Type: aplication/json");
    include_once("../class/class-usuarios.php");
    switch($_SERVER['REQUEST_METHOD']){
        case 'GET':
            Usuario::obtenerUsuarios();
            break;
    }
?>