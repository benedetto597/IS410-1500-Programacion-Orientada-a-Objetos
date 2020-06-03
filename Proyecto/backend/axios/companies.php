<?php
    header("Content-Type: application/json");
    include_once('../class/class-database.php');
    include_once('../class/class-companies.php');
    
    $database = new Database();
    switch($_SERVER['REQUEST_METHOD']){
        case 'POST':
            if(isset($_GET['action'])=='login'){
                $_POST = json_decode(file_get_contents('php://input'),true);
                Empresa::login($_POST['code'],$_POST['email'],$_POST['pass'],$database->getDB());
            }else{
                $_POST = json_decode(file_get_contents('php://input'),true);
                $empresa = new Empresa($_POST["firstName"], $_POST["lastName"], $_POST["companyName"], $_POST["companyPlan"],$_POST["country"], $_POST["currency"], $_POST["email"],  $_POST["pass"], $_POST["companyDir"], $_POST["companyLat"], $_POST["companyLong"],$_POST["branches"],$_POST["logo"],$_POST["banner"], $_POST["code"], $_POST["companyFb"], $_POST["companyIg"], $_POST["companyWha"],$_POST["companyTwit"]);
                echo $empresa->crearEmpresa($database->getDB());
            }
        break;
        case 'GET':
            if(isset($_GET['all'])){
                Empresa::obtenerEmpresas($database->getDB());
                exit();
            }
            if(Empresa::verificarAutenticacionAdmin($database->getDB())){
                if(isset($_GET['action'])=='all'){
                    Empresa::obtenerEmpresas($database->getDB());
                    exit();
                }
                
            }else{
                if(!Empresa::verificarAutenticacion($database->getDB())){
                    echo '{"mensaje:"Acceso no autorizado"}';
                    exit();
                }
                if(isset($_GET['action'])=='logout'){
                    Empresa::logout();
                    exit();
                }
                if (isset($_GET['id'])){
                    Empresa::obtenerEmpresa($database->getDB(), $_GET['id']);
                }else{
                    Empresa::obtenerEmpresas($database->getDB());
                }
            }
            
            
        break;
        case 'PUT':
            if(!Empresa::verificarAutenticacion($database->getDB())){
                echo '{"mensaje:"Acceso no autorizado"}';
                exit();
            }   
            $_PUT = json_decode(file_get_contents('php://input'),true);
            $empresa = new Empresa($_PUT["firstName"], $_PUT["lastName"], $_PUT["companyName"], $_PUT["companyPlan"],$_PUT["country"], $_PUT["currency"], $_PUT["email"],  $_PUT["pass"], $_PUT["companyDir"], $_PUT["companyLat"], $_PUT["companyLong"],$_PUT["branch"],$_PUT["logo"],$_PUT["banner"],$_PUT["code"], $_PUT["companyFb"], $_PUT["companyIg"], $_PUT["companyWha"],$_PUT["companyTwit"]);
            echo $empresa->actualizarEmpresa($database->getDB(),$_GET['id']);
        break;
        case 'DELETE':
            if(!Empresa::verificarAutenticacionAdmin($database->getDB())){
                echo '{"mensaje:"Acceso no autorizado"}';
                exit();
            }
            Empresa::eliminarEmpresa($database->getDB(),$_GET['id']);
        break;
    }
?>