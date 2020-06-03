<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mini-Mall | Sucursal</title>
    <link rel="stylesheet" href="../css/bootstrap.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
    <link rel="stylesheet" href="../css/estilos.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css">
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css" integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="crossorigin=""/>
    <script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js" integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew==" crossorigin=""></script>
    <link rel="shortcut icon" href="../img/icon/MiniMallicon.png">
    <style>
    
        /* Background Main Window*/
        main{
            width:auto;
            height:100vh;
            background-image: url(img/register-client.jpeg);
            background-repeat: no-repeat;
            background-size:cover;
            background-position:inherit;
        } 

        @media (max-width: 576px) {
            #map {
                
                bottom: 0;
                height: 230px;
                width: 220px;
            } 
        }

        @media (min-width: 576px) { 
            #map {
                
                bottom: 0;
                height: 230px;
                width: 420px;
            }
         }

        @media (min-width: 768px) { 
            #map {
                
                bottom: 0;
                height: 230px;
                width: 520px;
            }
         }

        @media (min-width: 992px) { 
            #map {
                
                bottom: 0;
                height: 230px;
                width: 640px;
            }
         }

        @media (min-width: 1200px) { 
            #map {
                
                bottom: 0;
                height: 230px;
                width: 860px;
            }
        }
                
        </style>
</head>
<body>
    <main>
        <!-- Barra de Navegación Primer Parte LandingPage -->
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-main" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon" ></span>
            </button>
            <div class="collapse navbar-collapse" id="navbar-main">
                <div class="row m-0 w-100">
                    <ul id="main-navbar" class="nav navbar-nav mr-auto px-5 my-auto">
                        <li class="nav-item invisible">
                            <div class="btn-group dropright">
                                <button type="button" class="btn dropdown-toggle text-white" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="fas fa-user fa-fw" style="color: white;"></i>Iniciar Sesión</button>
                                <div class="dropdown-menu" >
                                    <a class="dropdown-item" href="#login-client" data-toggle="modal" data-target="#login-client">Cliente</a>
                                    <a class="dropdown-item" href="#login-company" data-toggle="modal" data-target="#login-company">Empresa</a>
                                    <a class="dropdown-item" href="#login-admin" data-toggle="modal" data-target="#login-admin">Super Admin</a>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item invisible">
                            <div class="btn-group dropright">
                                <button type="button" class="btn dropdown-toggle text-white" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="fas fa-user-plus fa-fw" style="color: white;"></i>Registrarse</button>
                                <div class="dropdown-menu" >
                                    <a class="dropdown-item" href="../register/register-client.html">Cliente</a>
                                    <a class="dropdown-item" href="../register/register-company.html">Empresa</a>
                                    <a class="dropdown-item" href="../register/register-admin.html">Super Admin</a>
                                </div>
                            </div>
                        </li>
                    </ul>       
                    <a class="navbar-brand" href="#"><img id="Mini-Mall-mainlogo" class="img-responsive" src="../img/icon/MiniMall.png"></a>
                    <ul id="main-navbar" class="nav navbar-nav ml-auto px-5 my-auto">
                        <li class="nav-item invisible">
                            <a class="nav-link" href="#"><h6 class="text-white">Iniciar Sesión Iniciar Inic</h6></a>
                        </li>
                        <li class="nav-item invisible">
                            <a class="nav-link" href="../cart.html"><h6 class="text-white"><i class="fas fa-shopping-cart fa-fw" style="color: white;"></i>Carrito</h6></a>
                        </li>
                    </ul>
                
            
                </div>  
            </div>
        </nav>
        <nav class="navbar navbar-expand-lg navbar-light bg-light ">
                <div id="navbar-menu" class="w-100">
                    <ul class="nav navbar-nav px-5  my-auto">
                        <li class="nav-item mr-auto">
                            <a class="nav-link" href="../index.html"><h6 class="text-white"><i class="fas fa-home fa-fw" style="color: white;"></i>Inicio</h6></a>
                      </li>
                        <li class="nav-item mr-auto ml-auto invisible">
                            <div class="btn-group">
                                <button type="button" class="btn dropdown-toggle text-white" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="fas fa-percent fa-fw" style="color: white;"></i>Promociones</button>
                                <div class="dropdown-menu" >
                                    <a class="dropdown-item" href="promotions/product-company-list.html"> <i class="fas fa-building fa-fw"></i>Productos y Empresas</a>
                                    <a class="dropdown-item" href="promotions/categories.html"><i class="fas fa-th-large fa-fw"></i>Categorías</a>
                                    <a class="dropdown-item" href="promotions/last-products.html"><i class="fas fa-stopwatch fa-fw"></i>Últimas Promociones</a>
                                </div>
                            </div> 
                        </li>
                        <li class="nav-item ml-auto">
                            <a class="nav-link" href="../contact.html"><h6 class="text-white"><i class="fas fa-phone-volume fa-fw" style="color: white;"></i>Contactanos</h6></a>
                        </li>
                    </ul>
                </div>
        </nav>

        <!-- Formulario de Registro -->
        <form  action="">
            <div  class="col-8 mr-auto ml-auto p-4 animated bounceInRight" id="form-branch">
                <div class="form-row align-items-center">
                    <div class="col-auto mr-auto ml-auto">
                        <h4>Sucursal</h4>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <b>Nombre de la Sucursal</b>
                        <input type="text" class="form-control" id="name-branch" minlength="5" maxlength="40" placeholder="Sucursal" required onchange="ValidateName()">
                    </div>
                    
                    <div class="form-group col-md-6">
                        <b>Dirección</b>
                        <input type="address" class="form-control" id="address-branch" minlength="5" maxlength="40" placeholder="Dirección Completa" required onchange="ValidateDir()">
                    </div>
                    
                    <div class="form-group col-md-12">
                        <b>Seleccione Ubicación</b>
                        <div id="map"></div>
                        <small id="lat-long-alert" class="form-text text-dark"></small>
                    </div>
                </div>

                <div class="form-row align-items-center">
                    <div class="col-auto mr-auto ml-auto">
                        <button id="btn-branch" type="button" class="btn btn-lg shadow p-2 px-5 mb-0 rounded-pill text-dark" onclick="ValidateForm();" >Registrar Sucursal</button>
                    </div>
                </div>   
            </div>
        </form>
    </main>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js">
    </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.2/axios.min.js"></script>
    <script src="js/control-register-branch.js"></script>
</body>
</html>