<?php 
    //Verificando si esta logeado el usuario
    require_once('../backend/class/class-clients.php');
    require_once('../backend/class/class-companies.php');
    require_once('../backend/class/class-database.php');
    $database = new Database();
    if(Cliente::verificarAutenticacion($database->getDB()))
        header("Location: index.html");
    if(Empresa::verificarAutenticacion($database->getDB()))
        header("Location: index.html");
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mini-Mall | Empresa</title>
    <link rel="stylesheet" href="../css/bootstrap.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
    <link rel="stylesheet" href="../css/estilos.css">
    <link rel="shortcut icon" href="../img/icon/MiniMallicon.png">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css">
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
        integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
        crossorigin="" />
    <script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"
        integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew=="
        crossorigin=""></script>
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

        #map {

            bottom: 0;
            height: 145px;
            width: 260px;
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
                                    <a class="dropdown-item" href="register/register-client.html">Cliente</a>
                                    <a class="dropdown-item" href="register/register-company.html">Empresa</a>
                                    <a class="dropdown-item" href="register/register-admin.html">Super Admin</a>
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
                            <a class="nav-link" href="cart.html">
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
                        <a class="nav-link" href="../index.html">
                            <h6 class="text-white"><i class="fas fa-home fa-fw" style="color: white;"></i>Inicio</h6>
                        </a>
                    </li>
                    <li class="nav-item mr-auto ml-auto invisible">
                        <div class="btn-group">
                            <button type="button" class="btn dropdown-toggle text-white" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                <i class="fas fa-percent fa-fw" style="color: white;"></i>Promociones</button>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="promotions/product-company-list.html"> <i
                                        class="fas fa-building fa-fw"></i>Productos y Empresas</a>
                                <a class="dropdown-item" href="promotions/categories.html"><i
                                        class="fas fa-th-large fa-fw"></i>Categorías</a>
                                <a class="dropdown-item" href="promotions/last-products.html"><i
                                        class="fas fa-stopwatch fa-fw"></i>Últimas Promociones</a>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item ml-auto">
                        <a class="nav-link" href="../contact.html">
                            <h6 class="text-white"><i class="fas fa-phone-volume fa-fw"
                                    style="color: white;"></i>Contactanos</h6>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>


        <!-- Formulario de Registro -->
        <form action="" >
            <div class="col-8 mr-auto ml-auto p-3 animated bounceInLeft" id="form-company">
                <div class="form-row align-items-center">
                    <div class="col-auto mr-auto ml-auto">
                        <h4>Empresa</h4>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-4" >
                        <b>Nombre Completo</b>
                        <input type="text" class="form-control" id="first-name-company" placeholder="Nombres" required
                            minlength="3" maxlength="40" onchange="ValidateFirstName()">
                        <input type="text" class="form-control my-1" id="last-name-company" placeholder="Apellidos"
                            required minlength="3" maxlength="40" onchange="ValidateLastName()">
                    </div>
                    <div class="form-group col-md-4">
                        <b>Empresa</b>
                        <input type="text" class="form-control" id="name-company" placeholder="Nombre de la Empresa"
                            required minlength="5" maxlength="40" onchange="ValidateCompanyName()">
                        <input type="address" class="form-control my-1" id="address-company" placeholder="Dirección"
                            required maxlength="50" minlength="8" onchange="ValidateCompanyDir()">
                    </div>
                    <div class="form-group col-md-4">
                        <b>Contraseña</b>
                        <input type="password" class="form-control" id="password-company" placeholder="Contraseña"
                            required minlength="5" maxlength="30" onchange="ValidatePassword()">
                        <input type="password" class="form-control my-1" id="password-company-repeat"
                        placeholder="Repita Contraseña" required minlength="5" maxlength="30" onchange="ValidatePasswordRepeat()">                        
                        <small id="pass-repeat-company-alert" class="form-text text-dark"></small>
                    </div>

                    <div class="form-group col-md-4">
                        <b>País</b>
                        <select id="country-select" class="form-control text-white" required onchange="ValidateCountry()">
                            <option selected>Seleccione un País</option>
                            <option value="Honduras">Honduras</option>
                            <option value="Estados Unidos">Estados Unidos</option>
                        </select>
                        <small id="country-company-alert" class="form-text text-dark"></small>
                        <select id="currency-select" class="form-control text-white my-1" required onchange="ValidateCurrency()">
                            <option selected>Seleccione una Moneda</option>
                            <option>L Lempira</option>
                            <option>$ Dolar</option>
                        </select>
                        <small id="currency-company-alert" class="form-text text-dark"></small>
                        <div id="map"></div>
                        <small id="lat-long-company-alert" class="form-text text-dark"></small>
                    </div>
                    <div class="form-group col-md-4">
                        <b>Plan Empresarial</b>
                        <select id="plan-select" class="form-control text-white my-1" required onchange="ValidateCode()">
                            <option selected>Seleccione un Plan</option>
                            <option>Regular</option>
                            <option>Premium</option>
                            <option>Platinum</option>
                        </select>
                        <small id="plan-company-alert" class="form-text text-dark"></small>
                        <input type="number" class="form-control" id="number-employed-company"
                            placeholder="Código de Acceso" disabled>
                        <input type="email" class="form-control my-1" id="email-employed-company"
                            placeholder="Correo Empresarial" required onchange="ValidateEmail()">
                            <div class="custom-file overflow-hidden rounded-pill my-2">
                                <input id="pp-photo" type="file" class="custom-file-input rounded-pill"  accept="image/*"required >
                                <label for="pp-photo" class="custom-file-label rounded-pill"  accept="image/*">Subir logo</label>
                                <h1 style="visibility: hidden;" id="pp-url"></h1>
                            </div>
                            <div class="custom-file overflow-hidden rounded-pill ">
                                <input id="banner-photo" type="file" class="custom-file-input rounded-pill"  required >
                                <label for="banner-photo" class="custom-file-label rounded-pill">Subir Banner</label>
                                <h1 style="visibility: hidden;" id="banner-url"></h1>
                            </div>
                        <small id="banner-alert" class="form-text text-dark"></small>
                    </div>

                    <div class="form-group col-md-4">
                        <b>Redes Sociales</b>
                        <input type="text" class="form-control" id="facebook-company"
                            placeholder="URL Página de Facebook" required onchange="ValidateCompanyFb()">
                        <input type="number" class="form-control my-1" id="whatsapp-company"
                            placeholder="Número de WhatsApp" required minlength="12" maxlenth="12" onchange="ValidateCompanyWha()">
                        <input type="text" class="form-control my-1" id="instagram-company"
                            placeholder="URL Página de Instagram" required onchange="ValidateCompanyIg()">
                        <input type="text" class="form-control my-1" id="twitter-company"
                            placeholder="URL Página de Twitter" required onchange="ValidateCompanyTwit()">
                        <small id="twit-alert" class="form-text text-dark"></small>
                        <div class="form-row align-items-center">
                            <div class="col-auto mr-auto ml-auto">
                                <button id="btn-company-register" type="button"
                                    class="btn btn-lg shadow p-2 px-5 mb-0 rounded-pill text-white"
                                    onclick="updateInfo();">Registrar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <?php 
            include_once('../components/loader.php');
        ?>
        </form>
    </main>
     <!-- Firebase -->
     <script src="https://www.gstatic.com/firebasejs/7.7.0/firebase-app.js"></script>
     <script src="https://www.gstatic.com/firebasejs/7.7.0/firebase-storage.js"></script>
   
     <script>
       var firebaseConfig = {
         apiKey: "AIzaSyDHbIQpttJ5KwhJntjUa1aAKOTmuXIZRZ8",
       authDomain: "proyecto-poo-271914.firebaseapp.com",
       databaseURL: "https://proyecto-poo-271914.firebaseio.com",
       projectId: "proyecto-poo-271914",
       storageBucket: "proyecto-poo-271914.appspot.com",
       messagingSenderId: "220442033339",
       appId: "1:220442033339:web:cccf003c2c6a8daa2c7d9e",
       measurementId: "G-1JTVDET0HF"
     };
       // Initialize Firebase
       firebase.initializeApp(firebaseConfig);
     function uploadImageProfile() {
         const ref = firebase.storage().ref('/company-users');
         if(document.querySelector('#pp-photo') != ''){
           const file = document.querySelector('#pp-photo').files[0];
         const name = file.name;
         const metadata = {
           contentType: file.type
         };
         const task = ref.child(name).put(file, metadata);
         task
           .then(snapshot => snapshot.ref.getDownloadURL())
           .then(url => {
               document.getElementById('pp-url').innerHTML = url;
               console.log(document.getElementById('pp-url').innerHTML);
   
           })
           .catch(console.error);
         }
         
       }
       function uploadImageBanner() {
         const ref = firebase.storage().ref('/company-users');
         if(document.querySelector('#banner-photo') != ''){
             const file = document.querySelector('#banner-photo').files[0];
         const name = file.name;
         const metadata = {
             contentType: file.type
         };
         const task = ref.child(name).put(file, metadata);
         task
             .then(snapshot => snapshot.ref.getDownloadURL())
             .then(url => {
                 document.getElementById('banner-url').innerHTML = url;  
                 console.log(document.getElementById('banner-url').innerHTML);
             })
             .catch(console.error);
         }
         
         }

   </script>
       <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js">
       </script>
       <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.2/axios.min.js"></script>    
    <script src="../js/bootstrap.min.js"></script>
    <script src="js/control-register-company.js"></script>
</body>

</html>