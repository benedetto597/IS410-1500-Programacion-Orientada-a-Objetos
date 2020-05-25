<?php
    header("Content-Type: application/json");
    include_once('../class/class-database.php');
    include_once('../class/class-clients.php');
    
    $database = new Database();
    switch($_SERVER['REQUEST_METHOD']){
        case 'POST':
            if(isset($_GET['action'])=='login'){
                $_POST = json_decode(file_get_contents('php://input'),true);
                Cliente::login($_POST['user'],$_POST['email'],$_POST['pass'],$database->getDB());
            }else{
                $_POST = json_decode(file_get_contents('php://input'),true);
                $cliente = new Cliente($_POST["firstName"], $_POST["lastName"], $_POST["user"], $_POST["gen"],$_POST["country"], $_POST["currency"], $_POST["email"],  $_POST["pass"], $_POST["profileImg"]);
                echo $cliente->crearCliente($database->getDB());
            }
        break;
        case 'GET':
            if(!Cliente::verificarAutenticacion($database->getDB())){
                echo '{"mensaje:"Acceso no autorizado"}';
                exit();
            }
            if(isset($_GET['action'])=='logout'){
                Cliente::logout();
                exit();
            }
            if (isset($_GET['id'])){
                Cliente::obtenerCliente($database->getDB(), $_GET['id']);
            }else{
                Cliente::obtenerClientes($database->getDB());
            }
        break;
        case 'PUT':
            if(!Cliente::verificarAutenticacion($database->getDB())){
                echo '{"mensaje:"Acceso no autorizado"}';
                exit();
            }
            $_PUT = json_decode(file_get_contents('php://input'),true);
            $cliente = new Cliente($_PUT["firstName"], $_PUT["lastName"], $_PUT["user"], $_PUT["gen"],$_PUT["country"], $_PUT["currency"], $_PUT["email"],  $_PUT["pass"] , $_PUT["profileImg"]);
            echo $cliente->actualizarCliente($database->getDB(),$_GET['id']);
            
        break;
        case 'DELETE':
            if(!Cliente::verificarAutenticacion($database->getDB())){
                echo '{"mensaje:"Acceso no autorizado"}';
                exit();
            }
            Cliente::eliminarCliente($database->getDB(),$_GET['id']);
        break;
    }
?>