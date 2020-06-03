
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mini-Mall</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
    <link rel="stylesheet" href="css/estilos.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css">
    <link rel="shortcut icon" href="img/icon/MiniMallicon.png">
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
        integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
        crossorigin="" />
    <script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"
        integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew=="
        crossorigin=""></script>
    <style>
        /* Background Main Window*/
        main {
            width:auto;
            height: 100vh;
            background-image: url(img/lp-primary-image.jpeg);
            background-repeat: no-repeat;
            background-size: cover;
            background-position: inherit;
        }

        /* Background Second-main Window*/
        #lp-second-part {
            width:auto;
            height: 100vh;
            background-image: url(img/lp-second-image.jpeg);
            background-repeat: no-repeat;
            background-size: cover;
            background-position: inherit;

        }

        #modal-body-client {
            background-image: url(img/login-client.jpeg);
            background-repeat: no-repeat;
            background-size: cover;
            height: 500px;
        }

        #modal-body-company {
            background-image: url(img/login-company.jpeg);
            background-repeat: no-repeat;
            background-size: cover;
            height: 500px;
        }

        #modal-body-admin {
            background-image: url(img/login-admin.jpg);
            background-repeat: no-repeat;
            background-size: cover;
            height: 500px;
        }

        #map {
            height: 230px;
            width: 580px;
        }
    </style>
</head>

<body>
    <main>
        <!-- Barra de Navegación Primer Parte LandingPage -->
        <?php 
        //Verificando si esta logeado el usuario
        require_once('backend/class/class-admin.php');
        require_once('backend/class/class-clients.php');
        require_once('backend/class/class-companies.php');
        require_once('backend/class/class-database.php');
        $database = new Database();
        if(Administrador ::verificarAutenticacion($database->getDB())){
            include_once('components/navbar-login-admin.php');
        }else{
            if(Cliente ::verificarAutenticacion($database->getDB())){
                include_once('components/navbar-login-client.php');
            }else{    
                if(Empresa ::verificarAutenticacion($database->getDB())){
                    include_once('components/navbar-login-company.php');
                }else{
                    include_once('components/navbar-no-login.php');
                }
            }
        }
        ?>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div id="navbar-menu" class="w-100">
                    <ul class="nav navbar-nav px-5  my-auto">
                        <li class="nav-item mr-auto">
                            <a class="nav-link" href="index.php">
                                <h6 class="text-dark"><i class="fas fa-home fa-fw"></i>Inicio</h6>
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
                            <img id="Mini-Mall-mainlogo" class="img-responsive" src="img/icon/MiniMall.png">
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
                                        onclick="location.href='register/register-client.php'"
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
                            <img id="Mini-Mall-mainlogo" class="img-responsive" src="img/icon/MiniMall.png">
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
                                        onclick="location.href='register/register-company.php'"
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
                            <img id="Mini-Mall-mainlogo" class="img-responsive" src="img/icon/MiniMall.png">
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
                                        onclick="location.href='register/register-company.php'"
                                        class="btn btn-lg shadow  mb-0 rounded-pill my-2"
                                        style="padding-left:2rem; padding-right:2rem;">Registrarse</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Contenido Primer Parte LandinPage -->
        <div class="row px-4">
            <div class="col-xl-2 col-lg-2 col-md-3 col-xs-3 col-sm-3 animated bounceInDown">
                <div class="card" id="lp-content-img">
                    <div class="card-body">
                        <a href="promotions/last-products.php"><img class="card-img-top"
                                src="img/lp-content-image.jpeg" alt="Card image cap"></a>
                        <h6 id="lp-content-text"> Últimas Promociones</h6>
                    </div>
                </div>

            </div>
            <div class="col-xl-2 col-lg-2 col-md-3 col-xs-3 col-sm-3 animated bounceInDown">
                <div class="card" id="lp-content-img">
                    <div class="card-body">
                        <a href="promotions/categories.php"><img class="card-img-top"
                                src="img/lp-content-categories.jpeg" alt="Card image cap"></a>
                        <h6 id="lp-content-text"> Categorías</h6>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <!-- Segunda Parte LandingPage-->
    <div id="lp-second-part" class="p-0">
        <!-- Carrusel de Productos -->
        <div class="top-content p-3">
            <div class="container-fluid">
                <div id="carousel-products" class="carousel slide animated bounceInLeft" data-ride="carousel">
                    <div class="carousel-inner row w-75 mx-auto" role="listbox" id="carrusel">
                        <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3 active">
                            <a href="product.php"><img id="1" src=""
                                class="img-fluid mx-auto d-block card-img-top  rounded-circle" ></a>
                        </div>
                        <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                            <a href="product.php" ><img  id="2" src=""
                                class="img-fluid mx-auto d-block card-img-top  rounded-circle" ></a>
                        </div>
                        <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                            <a href="product.php"><img  id="3" src=""
                                class="img-fluid mx-auto d-block card-img-top  rounded-circle" ></a>
                        </div>
                        <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                            <a href="product.php"><img  id="4" src=""
                                class="img-fluid mx-auto d-block card-img-top  rounded-circle" ></a>
                        </div>
                        <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                            <a href="product.php"><img id="5" src=""
                                class="img-fluid mx-auto d-block card-img-top  rounded-circle" ></a>
                        </div>
                        
                        <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                            <a href="product.php" class="border-0"><img  id="6" src=""
                                class="img-fluid mx-auto d-block card-img-top  rounded-circle" ></a>
                        </div>
                        <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                            <a href="product.php"><img  id="7" src=""
                                class="img-fluid mx-auto d-block card-img-top  rounded-circle" ></a>
                        </div>
                        <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                            <a href="product.php"><img  id="8" src=""
                                class="img-fluid mx-auto d-block card-img-top  rounded-circle" ></a>
                        </div>
                        <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                            <a href="product.php"><img  id="9" src=""
                                class="img-fluid mx-auto d-block card-img-top  rounded-circle" ></a>
                        </div>
                        <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                            <a href="product.php"><img  id="10" src=""
                                class="img-fluid mx-auto d-block card-img-top  rounded-circle" ></a>
                        </div>
                        <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                            <a href="product.php"><img  id="11" src=""
                                class="img-fluid mx-auto d-block card-img-top  rounded-circle" ></a>
                        </div>
                        <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                            <a href="product.php"><img  id="12" src=""
                                class="img-fluid mx-auto d-block card-img-top  rounded-circle" ></a>
                        </div>
                        <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                            <a href="product.php"><img  id="13" src=""
                                class="img-fluid mx-auto d-block card-img-top  rounded-circle" ></a>
                        </div>
                        <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                            <a href="product.php"><img  id="14" src=""
                                class="img-fluid mx-auto d-block card-img-top  rounded-circle" ></a>
                        </div>
                        <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                            <a href="product.php"><img  id="15" src=""
                                class="img-fluid mx-auto d-block card-img-top  rounded-circle" ></a>
                        </div>
                        <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                            <a href="product.php"><img  id="16" src=""
                                class="img-fluid mx-auto d-block card-img-top  rounded-circle" ></a>
                        </div>
                        <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                            <a href="product.php"><img  id="17" src=""
                                class="img-fluid mx-auto d-block card-img-top  rounded-circle" ></a>
                        </div>
                        <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                            <a href="product.php"><img  id="18" src=""
                                class="img-fluid mx-auto d-block card-img-top  rounded-circle" ></a>
                        </div>
                        <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                            <a href="product.php"><img  id="19" src=""
                                class="img-fluid mx-auto d-block card-img-top  rounded-circle" ></a>
                        </div>
                        <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                            <a href="product.php"><img  id="20" src=""
                                class="img-fluid mx-auto d-block card-img-top  rounded-circle" ></a>
                        </div>
    
                    </div>
                    <a class="carousel-control-prev" href="#carousel-products" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carousel-products" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>

        <!-- Listas de Empresas y Productos -->
        <div class="row">
            <nav class="col-xl-6 col-lg-6 col-md-8 col-sm-12 col-xs-12 sidebar px-5 animated bounceInLeft">
                <div class="sidebar-sticky p-3">
                    <ul class="nav flex-column my-3">
                        <li class=" nav-item row">
                            <div class="col-lg-6 ">
                                <div class="px-0 text-right">
                                    <h5 class="card-text">Listado de las principales categorias que compiten en está web
                                        para alcanzar el mayor número de ventas</h5>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <a href="promotions/categories.php"><img src="img/lp-second-companylist.jpeg"
                                        class="card-img-right img-fluid rounded"></a>
                            </div>
                        </li>
                    </ul>
                    <ul class="nav flex-column my-3">
                        <li class="nav-item row">
                            <div class="col-lg-6 ">
                                <div class="px-0 text-right">
                                    <a href="promotions/last-products.php"><img src="img/lp-second-productlist.jpeg"
                                            class="card-img-right img-fluid rounded"></a>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <h5 class="card-text">Los productos y servicios de la mejor calidad sólo en este listado
                                    con los precios más baratos</h5>
                            </div>
                        </li>
                    </ul>
            </nav>

            <!-- Mapa y Comentario -->
            <nav class="col-xl-6 col-lg-6 col-md-4 col-sm-12 col-xs-12 col-md-12 d-md-block bg-dark sidebar animated bounceInRight"
                id="lp-second-map">
                <div class="sidebar-sticky p-3">
                    <ul class="nav flex-column my-3">
                        <li class=" nav-item row">
                            <div class="col-lg-12">
                                <div id="map"></div>
                            </div>
                        </li>
                    </ul>
                    <ul class="nav flex-column my-3 px-5">
                        <li class=" nav-item row">
                            <div class="col-lg-12">
                                <a href="#lp-card-comments"><img src="img/lp-second-commentsjpg" class="img-fluid"></a>
                            </div>
                        </li>
                    </ul>
            </nav>
        </div>
    </div>
    <!-- Tercera Parte LandingPage -->
    <div id="lp-third-part">
        <div class="row">
            <nav class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 bg-dark sidebar ">
                <div class="sidebar-sticky">
                    <img src="img/lp-content-third-image.jpeg" style="height:100vh; width: 100vw;">
                </div>
            </nav>

            <div class="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-xs-12 p-0 animated bounceInRight">
                <div class="card" id="lp-card-company">
                    <a href="#"><img src="img/icon/MiniMallicon.png" class="card-img-top p-3  img-thumbnail"
                            alt="logo-icon">
                        <div class="card-body text-center">
                            <p class="card-text"> ©Mini-Mall<br><small>Con una raíz minimalista enfocados en mostrar lo necesario sin descuidar la elegancia y ofrecer un entorno centralizado para el comercio </small></p>
                    </a>
                </div>
            </div>
        </div>

        <nav class="col-xl-4 col-lg-4 col-md-8 col-sm-6 col-xs-12 col-md-4 d-md-block sidebar animated bounceInRight"
            id="lp-sidebar-comment">
            <div class="sidebar-sticky p-5">
                <div id="lp-card-comments" class="card form-group">
                    <div class="card-body">
                        <textarea name="" id="" class="form-control"></textarea>
                    </div>
                </div>
            </div>
        </nav>
        <footer class="col-12">
            <ul class="nav px-5">
                <li class="nav-item ">
                    <a class="nav-link active p-1" href="https://es-la.facebook.com/"><i
                            class="fab fa-facebook-square fa-2x"></i></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active p-1" href="https://twitter.com/login?lang=es"><i
                            class="fab fa-twitter-square fa-2x"></i></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active p-1" href="https://www.instagram.com/?hl=es-la"><i
                            class="fab fa-instagram fa-2x"></i></a>
                </li>
                <li class="nav-item ml-auto ">
                    <a class="nav-link active" href="contact.php"><i
                            class="fas fa-phone-volume fa-fw"></i>Contáctenos</a>
                </li>
            </ul>
        </footer>
    </div>

    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js">
    </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.2/axios.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/localization.js"></script>
    <script src="js/login-validation.js"></script>
    <script src="js/control-index.js"></script>
</body>

</html>