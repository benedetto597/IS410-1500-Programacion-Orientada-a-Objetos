<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mini-Mall | Promociones</title>
    <link rel="stylesheet" href="../css/bootstrap.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
    <link rel="stylesheet" href="../css/estilos.css">
    <link rel="stylesheet" href="css/animation.css">
    <link rel="stylesheet" href="css/estilos-promociones.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css">
    <link rel="shortcut icon" href="../img/icon/MiniMallicon.png">
    <style>
        /* Background Main Window*/
        main {
            width: auto;
            height: 100vh;
            background-image: url(../img/lp-primary-image.jpeg);
            background-repeat: no-repeat;
            background-size: cover;
            background-position: inherit;
        }
    </style>
</head>

<body onload="showProducts()">
    <main>
        <!-- Barra de Navegación Primer Parte LandingPage -->
        <?php 
        //Verificando si esta logeado el usuario
        require_once('../backend/class/class-admin.php');
        require_once('../backend/class/class-clients.php');
        require_once('../backend/class/class-companies.php');
        require_once('../backend/class/class-database.php');
        $database = new Database();
        if(Administrador ::verificarAutenticacion($database->getDB())){
            include_once('../components/navbar-login-admin.php');
        }else{
            if(Cliente ::verificarAutenticacion($database->getDB())){
                include_once('../components/navbar-login-client.php');
            }else{    
                if(Empresa ::verificarAutenticacion($database->getDB())){
                    include_once('../components/navbar-login-company.php');
                }else{
                    include_once('../components/navbar-no-login.php');
                }
            }
        }
        ?>
        <nav class="navbar navbar-expand-lg navbar-light bg-light ">
            <div id="navbar-menu" class="w-100">
                <ul class="nav navbar-nav px-5  my-auto">
                    <li class="nav-item mr-auto">
                        <a class="nav-link" href="../index.php">
                            <h6 class="text-dark"><i class="fas fa-home fa-fw"></i>Inicio</h6>
                        </a>
                    </li>
                    <li class="nav-item mr-auto ml-auto">
                        <div class="btn-group">
                            <button type="button" class="btn dropdown-toggle" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                <i class="fas fa-percent fa-fw"></i>Promociones</button>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="../promotions/categories.php"><i
                                        class="fas fa-th-large fa-fw"></i>Categorías</a>
                                <a class="dropdown-item" href="../promotions/last-products.php"><i
                                        class="fas fa-stopwatch fa-fw"></i>Últimas Promociones</a>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item ml-auto">
                        <a class="nav-link" href="../contact.php">
                            <h6 class="text-dark"><i class="fas fa-phone-volume fa-fw"></i>Contactanos</h6>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
        <!-- Modal Login Cliente -->
        <div class="modal fade" id="login-client" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div id="modal-header-client" class="modal-header p-2">
                        <div class="col-md-2 ml-auto">
                            <img id="Mini-Mall-mainlogo" class="img-responsive" src="../img/icon/MiniMall.png">
                        </div>
                        <div class="col-md-1 ml-auto">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    </div>
                    <div id="modal-body-client" class="modal-body p-0">
                        <form id="modal-form-client" action="" class="bg-light p-3">
                            <div class="form-row align-items-center">
                                <div class="col-auto mr-auto ml-auto">
                                    <h4 id="exampleModalLabel">Cliente</h4>
                                    <small id="warning-client" class="form-text text-muted" style="color: red;"></small>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-10 mr-auto ml-auto">
                                    <input type="text" class="form-control my-2" id="login-user-client"
                                        placeholder="Usuario" required minlength="5" maxlength="15">
                                    <input type="email" class="form-control my-2" id="email-login-client"
                                        placeholder="Email" required>
                                    <input type="password" class="form-control my-2" id="login-pass-client"
                                        placeholder="Contraseña" aria-describedby="passwordHelpBlock" required
                                        minlength="5" maxlength="20">
                                    <small id="passwordHelpBlock" class="form-text text-muted">
                                        <a class="text-dark" href="#">¿Olvido su contraseña?</a>
                                    </small>
                                </div>
                            </div>
                        </form>
                        <div class="col-6 ml-auto mr-auto">
                            <div class="card" style="border: none;">
                                <div class="card-body ml-auto mr-auto">
                                    <button type="button" id="btn-client-login"
                                        class="btn btn-lg px-4 shadow  mb-0 rounded-pill my-2"
                                        onclick="ValidateClient();">Iniciar Sesión</button>
                                    <button type="button" id="btn-client-register-modal"
                                        onclick="location.href='../register/register-client.php'"
                                        class="btn btn-lg shadow  mb-0 rounded-pill my-2"
                                        style="padding-left:2rem; padding-right:2rem;">Registrarse</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal Login Empresa -->
        <div class="modal fade" id="login-company" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div id="modal-header-company" class="modal-header p-2">
                        <div class="col-md-2 ml-auto">
                            <img id="Mini-Mall-mainlogo" class="img-responsive" src="../img/icon/MiniMall.png">
                        </div>
                        <div class="col-md-1 ml-auto">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    </div>
                    <div id="modal-body-company" class="modal-body p-0">
                        <form id="modal-form-company" action="" class="bg-light p-3">
                            <div class="form-row align-items-center">
                                <div class="col-auto mr-auto ml-auto">
                                    <h4 id="exampleModalLabel">Empresa</h4>
                                    <small id="warning-company" class="form-text text-muted" style="color: red;"></small>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-10 mr-auto ml-auto">
                                    <input type="number" class="form-control my-2" id="login-code-company"
                                        placeholder="Código de Empleado" minlength="4" maxlength="4" required min="1000"
                                        max="3999">
                                    <input type="email" class="form-control my-2" id="email-login-company"
                                        placeholder="Email" required>
                                    <input type="password" class="form-control my-2" id="login-pass-company"
                                        placeholder="Contraseña" aria-describedby="passwordHelpBlock" required
                                        minlength="5" maxlength="20">
                                    <small id="passwordHelpBlock" class="form-text text-muted">
                                        <a class="text-dark" href="#">¿Olvido su contraseña?</a>
                                    </small>
                                </div>
                            </div>
                        </form>
                        <div class="col-6 ml-auto mr-auto">
                            <div class="card" style="border: none;">
                                <div class="card-body ml-auto mr-auto">
                                    <button type="button" id="btn-company-login"
                                        class="btn btn-lg px-4 shadow  mb-0 rounded-pill my-2"
                                        onclick="ValidateCompany();">Iniciar Sesión</button>
                                    <button type="button" id="btn-company-register-modal"
                                        onclick="location.href='../register/register-company.php'"
                                        class="btn btn-lg shadow  mb-0 rounded-pill my-2"
                                        style="padding-left:2rem; padding-right:2rem;">Registrarse</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal Login Administrador -->
        <div class="modal fade" id="login-admin" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div id="modal-header-admin" class="modal-header p-2">
                        <div class="col-md-2 ml-auto">
                            <img id="Mini-Mall-mainlogo" class="img-responsive" src="../img/icon/MiniMall.png">
                        </div>
                        <div class="col-md-1 ml-auto">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    </div>
                    <div id="modal-body-admin" class="modal-body p-0">
                        <form id="modal-form-admin" action="" class="bg-light p-3">
                            <div class="form-row align-items-center">
                                <div class="col-auto mr-auto ml-auto">
                                    <h4 id="exampleModalLabel">Administrador</h4>
                                    <small id="warning-admin" class="form-text text-muted" style="color: red;"></small>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-10 mr-auto ml-auto" id="form-login">
                                    <input type="number" class="form-control" id="login-code-admin"
                                        placeholder="Código de Acceso" required minlength="4" maxlength="5" min="1000"
                                        max="9999" name="login-code-admin">
                                    <input type="text" class="form-control my-2" id="login-user-admin"
                                        placeholder="Usuario" required minlength="5" maxlength="20" name="login-user-admin">
                                    <input type="email" class="form-control my-2" id="email-login-admin"
                                        placeholder="Email" required name="email-login-admin">
                                    <input type="password" class="form-control my-2" id="login-pass-admin"
                                        placeholder="Contraseña" aria-describedby="passwordHelpBlock" required
                                        minlength="5" maxlength="20" name="login-pass-admin">
                                    <small id="passwordHelpBlock" class="form-text text-muted">
                                        <a class="text-dark" href="#">¿Olvido su contraseña?</a>
                                    </small>
                                </div>
                            </div>
                        </form>
                        <div class="col-6 ml-auto mr-auto">
                            <div class="card" style="border: none;">
                                <div class="card-body ml-auto mr-auto">
                                    <button type="button" id="btn-admin-login"
                                        class="btn btn-lg px-4 shadow  mb-0 rounded-pill my-2"
                                        onclick="ValidateAdmin();">Iniciar Sesión</button>
                                    <button type="button" id="btn-admin-register-modal"
                                        onclick="location.href='../register/register-company.php'"
                                        class="btn btn-lg shadow  mb-0 rounded-pill my-2"
                                        style="padding-left:2rem; padding-right:2rem;">Registrarse</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Carrusel de Productos en Carrito o Comprados-->
        <div class="top-content p-3">
            <div class="container-fluid animated bounceInUp">
                <div id="carousel-products" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner row w-75 mx-auto" role="listbox" id="carousel-product-list">
                        
                        
                    
                </div>
            </div>
    </main>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js">
    </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.2/axios.min.js"></script>
    <script src="../js/bootstrap.min.js"></script>
    <script src="js/login-validation.js"></script>
    <script src="js/control-last-products-promotions.js"></script>
</body>

</html>