<?php
    header("Content-Type: aplication/json");
    include_once("../class/class-historias.php");
    switch($_SERVER['REQUEST_METHOD']){
        case 'GET':
            Historia::obtenerHistorias();
            break;
    }
?>