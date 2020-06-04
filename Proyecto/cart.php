<?php 
    //Verificando si esta logeado el usuario
    require_once('backend/class/class-clients.php');
    require_once('backend/class/class-database.php');
    $database = new Database();
    if(!Cliente::verificarAutenticacion($database->getDB()))
        header("Location: index.php");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mini Mall | Carrito</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
    <link rel="stylesheet" href="css/estilos.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css">
    <link rel="shortcut icon" href="img/icon/MiniMallicon.png">
    <style>
    
        /* Background Main Window*/
        main{
            width:auto;
            height:auto;
            background-image: url(img/cart.jpeg);
            background-repeat: repeat;
            background-size:cover;
            background-position:inherit;
        }

    </style>
</head>
<body onload="showProducts()">
    <main>
         <!-- Barra de Navegación Primer Parte LandingPage -->
         <?php
         //Verificando si esta logeado el usuario
            require_once('backend/class/class-clients.php');
            require_once('backend/class/class-database.php');
            $database = new Database();
            if(!Cliente::verificarAutenticacion($database->getDB())){
                header("Location: index.php");
            }else{    
                include_once('components/navbar-login-client.php');
            }
         ?>
           <nav class="navbar navbar-expand-lg navbar-light bg-light ">
            <div id="navbar-menu" class="w-100">
                <ul class="nav navbar-nav px-5  my-auto">
                    <li class="nav-item mr-auto">
                        <a class="nav-link" href="index.php">
                            <h6 class="text-white"><i class="fas fa-home fa-fw"></i>Inicio</h6>
                        </a>
                    </li>
                    <li class="nav-item mr-auto ml-auto">
                        <div class="btn-group">
                            <button type="button" class="btn dropdown-toggle" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                <i class="fas fa-percent fa-fw"></i>Promociones</button>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="promotions/categories.php"><i
                                        class="fas fa-th-large fa-fw"></i>Categorías</a>
                                <a class="dropdown-item" href="promotions/last-products.php"><i
                                        class="fas fa-stopwatch fa-fw"></i>Últimas Promociones</a>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item ml-auto">
                        <a class="nav-link" href="contact.php">
                            <h6 class="text-dark"><i class="fas fa-phone-volume fa-fw"></i>Contáctanos</h6>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
        <!-- Carrusel de Productos en Carrito -->
        <div class="top-content p-3">
            <div class="container-fluid animated bounceInUp">
                <div id="carousel-products" class="carousel slide" data-ride="carousel">
                    <div class="row w-75 mx-auto" role="listbox" id="carousel-product-list">
                    </div>
                </div>
            </div>
            <?php 
                include_once('components/loader.php');
            ?>
    </main>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js">
    </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.2/axios.min.js"></script>    
    <script src="js/bootstrap.min.js"></script>
    <script src="js/control-cart.js"></script>
</body>
</html>