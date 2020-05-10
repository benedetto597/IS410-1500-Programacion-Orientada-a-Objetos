<?php
    header("Content-Type: application/json");
    include_once('../class/class-database.php');
    include_once('../class/class-admin.php');
    
    $database = new Database();
    switch($_SERVER['REQUEST_METHOD']){
        case 'POST':
            if(isset($_GET['action'])=='login'){
                $_POST = json_decode(file_get_contents('php://input'),true);
                Administrador::login($_POST['code'],$_POST['user'],$_POST['email'],$_POST['pass'],$database->getDB());
            }else{
                $_POST = json_decode(file_get_contents('php://input'),true);
                $admin = new Administrador($_POST["firstName"], $_POST["lastName"], $_POST["user"], $_POST["gen"],$_POST["country"], $_POST["currency"], $_POST["email"],  $_POST["pass"], $_POST["accessCode"],  $_POST["profileImg"], $_POST["coverImg"]);
                echo $admin->crearAdmin($database->getDB());
            }
        break;
        case 'GET':
            if(!Administrador::verificarAutenticacion($database->getDB())){
                echo '{"mensaje:"Acceso no autorizado"}';
                exit();
            }
            if(isset($_GET['action'])=='logout'){
                Administrador::logout();
                exit();
            }
            if (isset($_GET['id'])){
                Administrador::obtenerAdmin($database->getDB(), $_GET['id']);
            }else{
                Administrador::obtenerAdmins($database->getDB());
            }
        break;
        case 'PUT':
            if(!Administrador::verificarAutenticacion($database->getDB())){
                echo '{"mensaje:"Acceso no autorizado"}';
                exit();
            }
            $_PUT = json_decode(file_get_contents('php://input'),true);
            $admin = new Administrador($_PUT["firstName"], $_PUT["lastName"], $_PUT["user"], $_PUT["gen"],$_PUT["country"], $_PUT["currency"], $_PUT["email"],  $_PUT["pass"] , $_PUT["accessCode"],  $_PUT["profileImg"], $_PUT["coverImg"]);
            echo $admin->actualizarAdmin($database->getDB(),$_GET['id']);
        break;
        case 'DELETE':
            if(!Administrador::verificarAutenticacion($database->getDB())){
                echo '{"mensaje:"Acceso no autorizado"}';
                exit();
            }
            Administrador::eliminarAdmin($database->getDB(),$_GET['id']);
        break;
    }
?>