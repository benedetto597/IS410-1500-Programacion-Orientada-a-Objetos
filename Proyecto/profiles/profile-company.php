<?php 
    //Verificando si esta logeado el usuario
    require_once('../backend/class/class-companies.php');
    require_once('../backend/class/class-database.php');
    $database = new Database();
    if(!Empresa ::verificarAutenticacion($database->getDB()))
        header("Location: ../index.php");
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mini Mall | Empresa</title>
    <link rel="stylesheet" href="../css/bootstrap.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
    <link rel="stylesheet" href="../css/estilos.css">
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
        integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
        crossorigin="" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css">
    <script src="https://cdn.jsdelivr.net/npm/chart.js@2.9.3/dist/Chart.min.js"></script>
    <script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"
        integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew=="
        crossorigin=""></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
    <link rel="shortcut icon" href="../img/icon/MiniMallicon.png">
    <style>
        /* Background Main Window*/
        main {
            width: 100vw;
            height: 40vh;
            background-image: url(../img/banner-company.jpg);
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
        }

        #map-promotions {
            height: 250px;
            width: 230px;
        }

        #map-update {
            height: 150px;
            width: 230px;
        }
    </style>
</head>

<body onload="ShowInfo();">
    <div class="row">
        <main class="col-12" id="main">
            <!-- Barra de Navegación Primer Parte LandingPage -->
            <?php
                include_once('../components/navbar-login-company.php');
            ?>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div id="navbar-menu" class="w-100">
                    <ul class="nav navbar-nav px-5  my-auto">
                        <li class="nav-item mr-auto">
                            <a class="nav-link" href="../index.php">
                                <h6 class="text-dark"><i class="fas fa-home fa-fw"></i>Inicio</h6>
                            </a>
                        </li>
                        <li class="nav-item mr-auto ml-auto" id="Promociones">
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
            <div class="container  col-lg-10 animated bounceInUp">
                <div class="fb-profile" id="logo-photo">
                    
                </div>
            </div>
        </main>
    </div>

    <!-- Tabs Visualización de Perfil -->
    <div id="tabs-company-profile" class="row p-0" style="height: 60vh">
        <div class="container p-0">
            <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-6 animated bounceInUp mt-5">
                    <div class="card mt-5 bg-transparent border-0 ml-auto mr-auto p-2" style="width: 18rem;">
                        <div class="card-body text-center mt-5">
                            <h5 class="card-text" id="company-name"></h5>
                            <h5 class="card-text" id="employed-name"></h5>
                            <h5 class="card-text" id="company-email"></h5>
                            <h5 class="card-text" id="company-contact"></h5>
                            <button type="button" id="btn-logout-admin" class="card-text  btn-lg shadow p-2 px-5 mb-0 rounded-pill text-white" onclick="logout()">Cerrar Sesión</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-9 col-md-6 col-sm-6 animated bounceInUp">
                    <div class="container mt-3 mb-0">
                        <!-- Nav tabs -->
                        <ul class="nav nav-tabs nav-fill">
                            <li class="nav-item">
                                <a class="nav-link active text-dark" data-toggle="tab"
                                    href="#informacion">Información</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-dark" data-toggle="tab" href="#estadisticas">Estadisticas</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-dark" data-toggle="tab" href="#productos">Productos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-dark" data-toggle="tab" href="#editar">Editar Perfil</a>
                            </li>
                        </ul>

                        <!-- Tab panes -->
                        <div class="tab-content">
                            <div id="informacion" class="container p-0 tab-pane active">
                                <div class="col-12 bg-white">
                                    <div class="container-fluid py-3 px-4">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <b><i class="fas fa-building fa-fw"></i> Nombre De la Empresa</b>
                                                <h6 id="info-company-name"></h6>
                                                <b><i class="fas fa-globe-americas"></i> País</b>
                                                <h6 id="info-company-country"></h6>
                                                <b><i class="fas fa-route"></i> Dirección</b>
                                                <h6 id="info-company-dir"></h6>
                                                <b><i class="fas fa-money-bill"></i> Moneda</b>
                                                <h6 id="info-company-currency"></h6>
                                            </div>
                                            <div class="col-md-6">
                                                <b><i class="fas fa-user fa-fw"></i> Empleado</b>
                                                <h6 id="info-company-employed"></h6>
                                                <b><i class="fas fa-at"></i> Correo</b>
                                                <h6 id="info-company-email"></h6>
                                                <b>Redes Sociales</b>
                                                <h6 id="info-company-fb"></h6>
                                                <h6 id="info-company-wha"></h6>
                                                <h6 id="info-company-twit"></h6>
                                                <h6 id="info-company-ig"></h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="estadisticas" class="container p-0 tab-pane fade">
                                <div class="col-12 bg-white">
                                    <div class="container-fluid p-3">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <canvas id="bar-chart-horizontal-day" width="600" height="450"
                                                    style="position: relative;"></canvas>
                                            </div>
                                            <div class="col-md-6">
                                                <canvas id="bar-chart-horizontal-month" width="600" height="450"
                                                    style="position: relative;"></canvas>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="productos" class="container p-0 tab-pane fade">
                                <div class="col-12 bg-white">
                                    <div class="container-fluid p-3">
                                        <div class="row">
                                            <div class="col-md-8">
                                                <div class="col-md-12 ml-auto mr-auto">
                                                    <a id="btn-add-promo" href="../register/register-promotion.php"
                                                        class="btn btn-lg shadow ml-auto mr-auto p-1 px-3 m-0 rounded  text-dark"
                                                        onclick="updateInfo();">Agregar Promoción</a>
                                                </div>
                                                <div class="col-md-12">
                                                    <b>Productos</b>
                                                    <div class="table-wrapper-scroll-y my-custom-scrollbar"
                                                        style="height: 16rem;">
                                                        <table class="table table-hover table-striped">
                                                            <thead class="table-warning">
                                                                <tr>
                                                                    <th scope="col">Producto</th>
                                                                    <th scope="col">Categoria</th>
                                                                    <th scope="col">Precio Real</th>
                                                                    <th scope="col">Descuento</th>
                                                                    <th scope="col">Precio Oferta</th>
                                                                    <th scope="col">Calificación</th>
                                                                    <th scope="col">Comentaríos</th>
                                                                    <th scope="col">Eliminar</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody id="product-list">
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <b>Sucursales</b>
                                                <div id="map-promotions"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="editar" class="container tab-pane fade p-0">
                                <div class="col-12 bg-white px-4 py-2">

                                    <!-- Formulario precargado de la información que se tiene agregada -->
                                    <div class="form-row">
                                        <div class="form-group col-md-4">
                                            <b>Empleado</b><br><small class="form-text text-dark" style="display: inline;" id="plan-alert"></small>
                                            <div class="row px-2">
                                                <div class="col-md-12 px-1" >
                                                    <select id="plan-company"  disabled class="form-control text-dark my-1"
                                                        onchange="EnableChange()">
                                                        <option>Seleccione Plan</option>
                                                        <option value="Regular">Regular</option>
                                                        <option value="Premium">Premium</option>
                                                        <option value="Platinum">Platinum</option>
                                                    </select>   
                                                </div>
                                            </div>
                                            <input type="email" class="form-control my-1" id="email-employed-company"
                                                placeholder="Correo Empresarial" onchange="EnableChange()">
                                            <small id="email-alert" class="form-text text-dark"></small>
                                            <input type="text" class="form-control" id="first-name-company"
                                                placeholder="Nombres" minlength="3" maxlength="40"
                                                onchange="EnableChange()">
                                            <small id="name-alert" class="form-text text-dark"></small>
                                            <input type="text" class="form-control my-1" id="last-name-company"
                                                placeholder="Apellidos" minlength="3" maxlength="40"
                                                onchange="EnableChange()">
                                            <small id="last-name-alert" class="form-text text-dark"></small>
                                            <div class="custom-file overflow-hidden rounded-pill my-2">
                                                <input id="pp-photo" type="file" class="custom-file-input rounded-pill" required onchange="EnableChange();">
                                                <label for="pp-photo" class="custom-file-label rounded-pill">Subir logo</label>
                                                <h1 style="visibility: hidden;" id="pp-url"></h1>
                                            </div>
                                            <div class="custom-file overflow-hidden rounded-pill ">
                                                <input id="banner-photo" type="file" class="custom-file-input rounded-pill"  required onchange="EnableChange();">
                                                <label for="banner-photo" class="custom-file-label rounded-pill">Subir Banner</label>
                                                <h1 style="visibility: hidden;" id="banner-url"></h1>
                                            </div>
                                            <small id="banner-alert" class="form-text text-dark"></small>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <b>Empresa</b>
                                            <input type="text" class="form-control" id="name-company"
                                                placeholder="Nombre de la Empresa" minlength="5" maxlength="40"
                                                onchange="EnableChange()">
                                            <small id="name-company-alert" class="form-text text-dark"></small>
                                            <input type="address" class="form-control my-1" id="address-company"
                                                placeholder="Dirección" maxlength="50" minlength="8"
                                                onchange="EnableChange()">
                                            <small id="address-company-alert" class="form-text text-dark"></small>
                                            <b>Localización</b>
                                            <div id="map-update"></div>
                                            <small id="lat-long-company-alert" class="form-text text-dark"></small>
                                        </div>
                                        <div class="form-group col-md-4">
                                            
                                            <b>Redes Sociales</b>
                                            <div class="row px-1">
                                                <div class="col-md-12 px-1">
                                                    <input type="text" class="form-control" id="facebook-company"
                                                        placeholder="Facebook" onchange="EnableChange()">
                                                    <small id="fb-alert" class="form-text text-dark"></small>
                                                    <input type="number" class="form-control my-1" id="whatsapp-company"
                                                        placeholder="WhatsApp" onchange="EnableChange()" minlength="12"
                                                        maxlenth="12">
                                                    <small id="wha-alert" class="form-text text-dark"></small>
                                                </div>
                                                <div class="col-md-12 px-1">
                                                    <input type="text" class="form-control my-1" id="instagram-company"
                                                        placeholder="Instagram" onchange="EnableChange()">
                                                    <small id="ig-alert" class="form-text text-dark"></small>
                                                    <input type="text" class="form-control my-1" id="twitter-company"
                                                        placeholder="Twitter" onchange="EnableChange()">
                                                    <small id="twit-alert" class="form-text text-dark"></small>
                                                </div>
                                            </div>

                                            <!-- Botón que se desbloqueará cuando el usuarío haga algún cambio -->
                                            <div class="form-row align-items-center pt-3">
                                                <div class="col-auto mr-auto ml-auto">
                                                    <button id="btn-update-info" type="button"
                                                        class="btn btn-lg shadow p-2 px-3 m-0 rounded-pill text-dark"
                                                        onclick="updateInfo();">Guardar
                                                        Cambios</button>
                                                        <small id="data-alert" class="form-text text-dark bg-danger"></small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <?php 
            include_once('../components/loader.php');
        ?>
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
            $(window).on("load",function(){
                $(".loader-wrapper").fadeIn("slow");
            });
      </script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js">
          </script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.2/axios.min.js"></script>    <script src="js/bootstrap.min.js"></script>
        <script src="../js/bootstrap.min.js"></script>
        <script src="js/control-company.js"></script>
</body>

</html>