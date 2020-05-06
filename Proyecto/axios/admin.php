<?php
    include_once('../class/class-database.php');
    include_once('../class/class-admin.php');
    
    header("Content-Type: application/json");
    $database = new Database();
    switch($_SERVER['REQUEST_METHOD']){
        case 'POST':
            $_POST = json_decode(file_get_contents('php://input'),true);
            $admin = new Administrador($_POST["firstName"], $_POST["lastName"], $_POST["user"], $_POST["gen"],$_POST["country"], $_POST["currency"], $_POST["email"],  $_POST["pass"],  $_POST["profileImg"], $_POST["coverImg"]);
            echo $admin->crearAdministrador($database->getDB());
            
        break;
        case 'GET':
            if (isset($_GET['id'])){
                $resultado["mensaje"] = "Retornar el usuario con el id: " . $_GET['id'];
                echo json_encode($resultado);
            }else{
                $resultado["mensaje"] = "Retornar todos los usuarios";
                echo json_encode($resultado);
            }
        break;
        case 'PUT':
            $_PUT = json_decode(file_get_contents('php://input'),true);
            $resultado["mensaje"] =  "Actualizar un usuario con el id: " .$_GET['id'].
                                    ",  Informacion a actualizar: ".json_encode($_PUT);
            echo json_encode($resultado);
        break;
        case 'DELETE':
            $resultado["mensaje"] = "Eliminar un usuario con el id: ".$_GET['id'];
            echo json_encode($resultado);
        break;
    }
?>