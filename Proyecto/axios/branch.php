<?php
    header("Content-Type: application/json");
    include_once('../class/class-database.php');
    include_once('../class/class-branch.php');
    
    $database = new Database();
    switch($_SERVER['REQUEST_METHOD']){
        case 'POST':
            $_POST = json_decode(file_get_contents('php://input'),true);
            $sucursal = new Sucursal($_POST["name"], $_POST["direction"], $_POST["latitud"], $_POST["longitud"]);
            echo $sucursal->crearSucursal($database->getDB());
        break;
        case 'GET':
            if (isset($_GET['id'])){
                Sucursal::obtenerSucursal($database->getDB(), $_GET['id']);
            }else{
                Sucursal::obtenerSucursales($database->getDB());
            }
        break;
        case 'PUT':
            $_PUT = json_decode(file_get_contents('php://input'),true);
            $sucursal = new Sucursal($_PUT["name"], $_PUT["direction"], $_PUT["latitud"], $_PUT["longitud"]);
            echo $sucursal->actualizarSucursal($database->getDB(),$_GET['id']);
        break;
        case 'DELETE':
            Sucursal::eliminarSucursal($database->getDB(),$_GET['id']);
        break;
    }
?>