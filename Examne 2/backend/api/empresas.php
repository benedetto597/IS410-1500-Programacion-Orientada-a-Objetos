<?php
    header("Content-Type: aplication/json");
    include_once("../class/class-empresas.php");
    switch($_SERVER['REQUEST_METHOD']){
        case 'GET':
            Empresa::obtenerEmpresas();
            break;
    }
?>