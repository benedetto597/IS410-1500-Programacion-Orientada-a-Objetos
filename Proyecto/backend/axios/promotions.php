<?php
    header("Content-Type: application/json");
    include_once('../class/class-database.php');
    include_once('../class/class-promotions.php');
    
    $database = new Database();
    switch($_SERVER['REQUEST_METHOD']){
        case 'POST':
            
            if (isset($_GET['action']) == 'promotion'){
                $_POST = json_decode(file_get_contents('php://input'),true);
                $promocion = new Promocion($_POST["product"], $_POST["branch"], $_POST["realPrice"], $_POST["discount"],$_POST["discountPrice"], $_POST["start"],  $_POST["end"]);
                echo $promocion->crearPromocion($database->getDB());
                exit();
            }else{
                if (isset($_GET['comment']) == 'comment'){
                    $_POST = json_decode(file_get_contents('php://input'),true);
                    $promocion = new Promocion($_POST["product"], $_POST["branch"], $_POST["realPrice"], $_POST["discount"],$_POST["discountPrice"], $_POST["start"],  $_POST["end"]);
                    echo $promocion->crearComentario($database->getDB());
                    exit();
                }else{
                    if (isset($_GET['fav']) == 'fav'){
                        $_POST = json_decode(file_get_contents('php://input'),true);
                        $promocion = new Promocion($_POST["product"], $_POST["branch"], $_POST["realPrice"], $_POST["discount"],$_POST["discountPrice"], $_POST["start"],  $_POST["end"]);
                        echo $promocion->crearFavorito($database->getDB());
                        exit();
                    }else{
                        if (isset($_GET['cart']) == 'cart'){
                            $_POST = json_decode(file_get_contents('php://input'),true);
                            $promocion = new Promocion($_POST["product"], $_POST["branch"], $_POST["realPrice"], $_POST["discount"],$_POST["discountPrice"], $_POST["start"],  $_POST["end"]);
                            echo $promocion->crearCarrito($database->getDB());
                            exit();
                        }else{
                            if (isset($_GET['qa']) == 'qa'){
                                $_POST = json_decode(file_get_contents('php://input'),true);
                                $promocion = new Promocion($_POST["product"], $_POST["branch"], $_POST["realPrice"], $_POST["discount"],$_POST["discountPrice"], $_POST["start"],  $_POST["end"]);
                                echo $promocion->crearCalificacion($database->getDB());
                                exit();
                            }else{
                                if (isset($_GET['buy']) == 'buy'){
                                    $_POST = json_decode(file_get_contents('php://input'),true);
                                    $promocion = new Promocion($_POST["product"], $_POST["branch"], $_POST["realPrice"], $_POST["discount"],$_POST["discountPrice"], $_POST["start"],  $_POST["end"]);
                                    echo $promocion->crearCompra($database->getDB());
                                    exit();
                                }
                            }
                        }
                    }
                }
            }
        break;
        case 'GET':
            if (isset($_GET['id'])){
                Promocion::obtenerPromocion($database->getDB(), $_GET['id']);
            }
            if (isset($_GET['name'])){
                Promocion::obtenerPromociones($database->getDB(), $_GET['name']);
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