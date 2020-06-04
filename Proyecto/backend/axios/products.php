<?php
    header("Content-Type: application/json");
    include_once('../class/class-database.php');
    include_once('../class/class-products.php');
    
    $database = new Database();
    switch($_SERVER['REQUEST_METHOD']){
        case 'POST':
            if(!Producto::verificarAutenticacion($database->getDB())){
                echo '{"mensaje:"Acceso no autorizado"}';
                exit();
            }
            $_POST = json_decode(file_get_contents('php://input'),true);
            $producto = new Producto($_POST["name"], $_POST["img"], $_POST["price"], $_POST["category"],$_POST["description"], $_POST["branch"],  $_POST["promotions"],  $_POST["comments"],  $_POST["favs"],  $_POST["cart"],  $_POST["buy"],  $_POST["qa"]);
            echo $producto->crearProducto($database->getDB());
            
        break;
        case 'GET':
            if(isset($_GET['all'])){
                Producto::obtenerProductos($database->getDB());
                exit();
            }
            if(isset($_GET['idp'])){
                Producto::obtenerProducto($database->getDB(), $_GET['idp']);
                exit();
            }
            if(!Producto::verificarAutenticacion($database->getDB())){
                echo '{"mensaje:"Acceso no autorizado"}';
                exit();
            }
            
            if (isset($_GET['id'])){
                Producto::obtenerProducto($database->getDB(), $_GET['id']);
            }else{
                Producto::obtenerProductos($database->getDB());
            }
        break;
        case 'PUT':
            if(!Producto::verificarAutenticacion($database->getDB())){
                echo '{"mensaje:"Acceso no autorizado"}';
                exit();
            }
            $_PUT = json_decode(file_get_contents('php://input'),true);
            $producto = new Producto($_PUT["name"], $_PUT["img"], $_PUT["price"], $_PUT["category"],$_PUT["description"], $_PUT["branch"], $_PUT["promotions"],  $_POST["comments"],  $_POST["favs"],  $_POST["cart"],  $_POST["buy"],  $_POST["qa"]);
            echo $producto->actualizarProducto($database->getDB(),$_GET['id']);
        break;
        case 'DELETE':
            if(!Producto::verificarAutenticacion($database->getDB())){
                echo '{"mensaje:"Acceso no autorizado"}';
                exit();
            }
            Producto::eliminarProducto($database->getDB(),$_GET['id']);
        break;
    }
?>