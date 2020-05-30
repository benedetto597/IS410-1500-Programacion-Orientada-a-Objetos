<?php
    header("Content-Type: aplication/json");
    include_once("../class/class-categorias.php");
    switch($_SERVER['REQUEST_METHOD']){
        case 'POST':
            $_POST = json_decode(file_get_contents('php://input'), true);
            $categoria = new Categoria($_POST["nombreCategoria"], $_POST["descripcion"], $_POST["color"],$_POST["icono"], $_POST["empresas"] );
            $categoria->crearCategoria();
            break;
        case 'GET':
            Categoria::obtenerCategorias();
            break;
    }
?>