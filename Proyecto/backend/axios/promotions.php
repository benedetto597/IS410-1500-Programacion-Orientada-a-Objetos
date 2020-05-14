<?php
    header("Content-Type: application/json");
    include_once('../class/class-database.php');
    include_once('../class/class-promotions.php');
    
    $database = new Database();
    switch($_SERVER['REQUEST_METHOD']){
        case 'POST':
           
            $_POST = json_decode(file_get_contents('php://input'),true);
            $promocion = new Promocion($_POST["product"], $_POST["branch"], $_POST["realPrice"], $_POST["discount"],$_POST["discountPrice"], $_POST["start"],  $_POST["end"]);
            echo $promocion->crearPromocion($database->getDB());
            
        break;
        case 'GET':
            if(!Promocion::verificarAutenticacion($database->getDB())){
                echo '{"mensaje:"Acceso no autorizado"}';
                exit();
            }
            if (isset($_GET['id'])){
                Promocion::obtenerPromocion($database->getDB(), $_GET['id']);
            }else{
                Promocion::obtenerPromociones($database->getDB());
            }
        break;
        case 'PUT':
            if(!Promocion::verificarAutenticacion($database->getDB())){
                echo '{"mensaje:"Acceso no autorizado"}';
                exit();
            }
            $_PUT = json_decode(file_get_contents('php://input'),true);
            $promocion = new Promocion($_PUT["product"], $_PUT["branch"], $_PUT["realPrice"], $_PUT["discount"],$_PUT["discountPrice"], $_PUT["start"],  $_PUT["end"]);
            echo $promocion->actualizarPromocion($database->getDB(),$_GET['id']);
        break;
        case 'DELETE':
            if(!Promocion::verificarAutenticacion($database->getDB())){
                echo '{"mensaje:"Acceso no autorizado"}';
                exit();
            }
            Promocion::eliminarPromocion($database->getDB(),$_GET['id']);
        break;
    }
?>