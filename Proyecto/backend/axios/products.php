<?php
    header("Content-Type: application/json");
    include_once('../class/class-database.php');
    include_once('../class/class-products.php');
    
    $database = new Database();
    switch($_SERVER['REQUEST_METHOD']){
        case 'POST':
            $_POST = json_decode(file_get_contents('php://input'),true);
            $producto = new Producto($_POST["name"], $_POST["img"], $_POST["price"], $_POST["category"],$_POST["description"], $_POST["branch"]);
            echo $producto->crearProducto($database->getDB());
            
        break;
        case 'GET':
            if (isset($_GET['id'])){
                Producto::obtenerProducto($database->getDB(), $_GET['id']);
            }else{
                Producto::obtenerProductos($database->getDB());
            }
        break;
        case 'PUT':
            $_PUT = json_decode(file_get_contents('php://input'),true);
            $producto = new Producto($_PUT["name"], $_PUT["img"], $_PUT["price"], $_PUT["category"],$_PUT["description"], $_PUT["branch"]);
            echo $producto->actualizarProducto($database->getDB(),$_GET['id']);
        break;
        case 'DELETE':
            Producto::eliminarProducto($database->getDB(),$_GET['id']);
        break;
    }
?>