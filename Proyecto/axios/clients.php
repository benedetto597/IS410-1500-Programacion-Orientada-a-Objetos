<?php
    header("Content-Type: application/json");
    include_once('../class/class-database.php');
    include_once('../class/class-clients.php');
    
    $database = new Database();
    switch($_SERVER['REQUEST_METHOD']){
        case 'POST':
            $_POST = json_decode(file_get_contents('php://input'),true);
            $cliente = new Cliente($_POST["firstName"], $_POST["lastName"], $_POST["user"], $_POST["gen"],$_POST["country"], $_POST["currency"], $_POST["email"],  $_POST["pass"], $_POST["profileImg"]);
            echo $cliente->crearCliente($database->getDB());
            
        break;
        case 'GET':
            if (isset($_GET['id'])){
                Cliente::obtenerCliente($database->getDB(), $_GET['id']);
            }else{
                Cliente::obtenerClientes($database->getDB());
            }
        break;
        case 'PUT':
            $_PUT = json_decode(file_get_contents('php://input'),true);
            $cliente = new Cliente($_PUT["firstName"], $_PUT["lastName"], $_PUT["user"], $_PUT["gen"],$_PUT["country"], $_PUT["currency"], $_PUT["email"],  $_PUT["pass"] , $_PUT["profileImg"]);
            echo $cliente->actualizarCliente($database->getDB(),$_GET['id']);
        break;
        case 'DELETE':
            Cliente::eliminarCliente($database->getDB(),$_GET['id']);
        break;
    }
?>