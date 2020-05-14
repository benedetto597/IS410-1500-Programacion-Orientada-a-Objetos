<?php
    header("Content-Type: application/json");
    include_once('../class/class-database.php');
    include_once('../class/class-branch.php');
    
    $database = new Database();
    switch($_SERVER['REQUEST_METHOD']){
        case 'POST':
            if(!Sucursal::verificarAutenticacion($database->getDB())){
                echo '{"mensaje:"Acceso no autorizado"}';
                exit();
            }
            $_POST = json_decode(file_get_contents('php://input'),true);
            $sucursal = new Sucursal($_POST["name"], $_POST["direction"], $_POST["latitud"], $_POST["longitud"], $_POST['products']);
            echo $sucursal->crearSucursal($database->getDB());
        break;
        case 'GET':
            if(!Sucursal::verificarAutenticacion($database->getDB())){
                echo '{"mensaje:"Acceso no autorizado"}';
                exit();
            }
            if (isset($_GET['id'])){
                Sucursal::obtenerSucursal($database->getDB(), $_GET['id']);
            }else{
                Sucursal::obtenerSucursales($database->getDB());
            }
        break;
        case 'PUT':
            if(!Sucursal::verificarAutenticacion($database->getDB())){
                echo '{"mensaje:"Acceso no autorizado"}';
                exit();
            }
            $_PUT = json_decode(file_get_contents('php://input'),true);
            $sucursal = new Sucursal($_PUT["name"], $_PUT["direction"], $_PUT["latitud"], $_PUT["longitud"], $_PUT['products']);
            echo $sucursal->actualizarSucursal($database->getDB(),$_GET['id']);
        break;
        case 'DELETE':
            if(!Sucursal::verificarAutenticacion($database->getDB())){
                echo '{"mensaje:"Acceso no autorizado"}';
                exit();
            }
            Sucursal::eliminarSucursal($database->getDB(),$_GET['id']);
        break;
    }
?>