<?php
    header("Content-Type: application/json");
    include_once('../class/class-database.php');
    include_once('../class/class-companies.php');
    
    $database = new Database();
    switch($_SERVER['REQUEST_METHOD']){
        case 'POST':
            $_POST = json_decode(file_get_contents('php://input'),true);
            $empresa = new Empresa($_POST["firstName"], $_POST["lastName"], $_POST["companyName"], $_POST["companyPlan"],$_POST["country"], $_POST["currency"], $_POST["email"],  $_POST["pass"], $_POST["companyDir"], $_POST["companyLat"], $_POST["companyLong"],$_POST["branch"],$_POST["logo"],$_POST["banner"], $_POST["code"], $_POST["companyFb"], $_POST["companyIg"], $_POST["companyWha"],$_POST["companyTwit"]);
            echo $empresa->crearEmpresa($database->getDB());
            
        break;
        case 'GET':
            if (isset($_GET['id'])){
                Empresa::obtenerEmpresa($database->getDB(), $_GET['id']);
            }else{
                Empresa::obtenerEmpresas($database->getDB());
            }
        break;
        case 'PUT':
            $_PUT = json_decode(file_get_contents('php://input'),true);
            $empresa = new Empresa($_PUT["firstName"], $_PUT["lastName"], $_PUT["companyName"], $_PUT["code"], $_PUT["companyPlan"],$_PUT["country"], $_PUT["currency"], $_PUT["email"],  $_PUT["pass"], $_PUT["companyDir"], $_PUT["companyLat"], $_PUT["companyLong"],$_PUT["branch"],$_PUT["logo"],$_PUT["banner"], $_PUT["companyFb"], $_PUT["companyIg"], $_PUT["companyWha"],$_PUT["companyTwit"]);
            echo $empresa->actualizarEmpresa($database->getDB(),$_GET['id']);
        break;
        case 'DELETE':
            Empresa::eliminarEmpresa($database->getDB(),$_GET['id']);
        break;
    }
?>