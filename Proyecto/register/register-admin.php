<?php 
    //Verificando si esta logeado el usuario
    require_once('../backend/class/class-clients.php');
    require_once('../backend/class/class-companies.php');
    require_once('../backend/class/class-database.php');
    $database = new Database();
    if(Cliente::verificarAutenticacion($database->getDB()))
        header("Location: index.php");
    if(Empresa::verificarAutenticacion($database->getDB()))
        header("Location: index.php");
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mini-Mall | Administrador</title>
    <link rel="stylesheet" href="../css/bootstrap.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
    <link rel="stylesheet" href="../css/estilos.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css">
    <link rel="shortcut icon" href="../img/icon/MiniMallicon.png">
    <style>
        /* Background Main Window*/
        main {
            width: auto;
            height: 100vh;
            background-image: url(img/register-client.jpeg);
            background-repeat: no-repeat;
            background-size: cover;
            background-position: inherit;
        }
    </style>
</head>

<body>
    <main>
        <!-- Barra de Navegación Primer Parte LandingPage -->
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-main"
                aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbar-main">
                <div class="row m-0 w-100">
                    <ul id="main-navbar" class="nav navbar-nav mr-auto px-5 my-auto">
                        <li class="nav-item invisible">
                            <div class="btn-group dropright">
                                <button type="button" class="btn dropdown-toggle text-white" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                    <i class="fas fa-user fa-fw" style="color: white;"></i>Iniciar Sesión</button>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="#login-client" data-toggle="modal"
                                        data-target="#login-client">Cliente</a>
                                    <a class="dropdown-item" href="#login-company" data-toggle="modal"
                                        data-target="#login-company">Empresa</a>
                                    <a class="dropdown-item" href="#login-admin" data-toggle="modal"
                                        data-target="#login-admin">Super Admin</a>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item invisible">
                            <div class="btn-group dropright">
                                <button type="button" class="btn dropdown-toggle text-white" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                    <i class="fas fa-user-plus fa-fw" style="color: white;"></i>Registrarse</button>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="register/register-client.php">Cliente</a>
                                    <a class="dropdown-item" href="register/register-company.php">Empresa</a>
                                    <a class="dropdown-item" href="register/register-admin.php">Super Admin</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <a class="navbar-brand" href="#"><img id="Mini-Mall-mainlogo" class="img-responsive"
                            src="../img/icon/MiniMall.png"></a>
                    <ul id="main-navbar" class="nav navbar-nav ml-auto px-5 my-auto">
                        <li class="nav-item invisible">
                            <a class="nav-link" href="#">
                                <h6 class="text-white">Iniciar Sesión Iniciar Inic</h6>
                            </a>
                        </li>
                        <li class="nav-item invisible">
                            <a class="nav-link" href="cart.php">
                                <h6 class="text-white"><i class="fas fa-shopping-cart fa-fw"
                                        style="color: white;"></i>Carrito</h6>
                            </a>
                        </li>
                    </ul>


                </div>
            </div>
        </nav>
        <nav class="navbar navbar-expand-lg navbar-light bg-light ">
            <div id="navbar-menu" class="w-100">
                <ul class="nav navbar-nav px-5  my-auto">
                    <li class="nav-item mr-auto">
                        <a class="nav-link" href="../index.php">
                            <h6 class="text-white"><i class="fas fa-home fa-fw" style="color: white;"></i>Inicio</h6>
                        </a>
                    </li>
                    <li class="nav-item mr-auto ml-auto invisible">
                        <div class="btn-group">
                            <button type="button" class="btn dropdown-toggle text-white" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                <i class="fas fa-percent fa-fw" style="color: white;"></i>Promociones</button>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="promotions/product-company-list.php"> <i
                                        class="fas fa-building fa-fw"></i>Productos y Empresas</a>
                                <a class="dropdown-item" href="promotions/categories.php"><i
                                        class="fas fa-th-large fa-fw"></i>Categorías</a>
                                <a class="dropdown-item" href="promotions/last-products.php"><i
                                        class="fas fa-stopwatch fa-fw"></i>Últimas Promociones</a>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item ml-auto">
                        <a class="nav-link" href="../contact.php">
                            <h6 class="text-white"><i class="fas fa-phone-volume fa-fw"
                                    style="color: white;"></i>Contactanos</h6>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>

        <!-- Formulario de Registro -->
        <form action="">
            <div class="col-8 mr-auto ml-auto p-3 animated bounceInLeft" id="form-admin">
                <div class="form-row align-items-center">
                    <div class="col-auto mr-auto ml-auto text-white">
                        <h4>Administrador</h4>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <b class="text-white">Nombre Completo</b>
                        <input type="text" class="form-control" id="first-name-admin" placeholder="Nombres" required
                            minlength="3" maxlength="40" onchange="ValidateFirstName()">
                        <input type="text" class="form-control my-1" id="last-name-admin" placeholder="Apellidos"
                            required minlength="3" maxlength="40" onchange="ValidateLastName()">
                    </div>

                    <div class="form-group col-md-6">
                        <b class="text-white">País</b>
                        <select id="country-select-admin" class="form-control text-white" required onchange="ValidateCountry()">
                            <option selected>Seleccione un País</option>
                            <option>Honduras</option>
                            <option>Estados Unidos</option>
                        </select>
                        <small id="country-alert" class="form-text text-white"></small>
                        <select id="currency-select-admin" class="form-control text-white my-1" required onchange="ValidateCurrency()">
                            <option selected>Seleccione una Moneda</option>
                            <option>L Lempira</option>
                            <option>$ Dolar</option>
                        </select>
                        <small id="currency-alert" class="form-text text-white"></small>
                    </div>

                    <div class="form-group col-md-6">
                        <b class="text-white">Acceso</b>
                        <input type="number" class="form-control" id="code-admin"
                            placeholder="Código de Acceso de 4 Digitos" min="1000" max="9999" onchange="ValidateAccess()">
                        <input type="text" class="form-control my-1" id="user-admin" placeholder="Nombre de Acceso"
                            required minlength="5" maxlength="15" onchange="ValidateUser()">
                        <input type="email" class="form-control" id="email-admin" placeholder="Email" required onchange="ValidateEmail()">
                    </div>

                    <div class="form-group col-md-6">
                        <b class="text-white">Contraseña</b>
                        <input type="password" class="form-control " id="password-admin" placeholder="Contraseña"
                            required onchange="ValidatePassword()">
                        <input type="password" class="form-control my-1" id="password-admin-repeat"
                            placeholder="Repita Contraseña" required onchange="ValidatePasswordRepeat()">
                        <select id="sex-select-admin" class="form-control text-white" required onchange="ValidateGen()">
                            <option selected>Seleccione Genero</option>
                            <option>Masculino</option>
                            <option>Femenino</option>
                            <option>Otro</option>
                        </select>
                        <small id="gen-alert" class="form-text text-white"></small>
                    </div>
                </div>

                <div class="form-row align-items-center">
                    <div class="col-auto mr-auto ml-auto">
                        <div class="form-group">

                        </div>
                        <button type="button" id="btn-admin-register"
                            class="btn btn-lg shadow p-2 px-5 mb-0 bg-white rounded-pill"
                            onclick="ValidateForm();">Registrarse</button>
                    </div>
                </div>
            </div>
        </form>
    </main>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js">
    </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.2/axios.min.js"></script>
    <script src="../js/bootstrap.min.js"></script>
    <script src="js/control-register-admin.js"></script>
</body>

</html>