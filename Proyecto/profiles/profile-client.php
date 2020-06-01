<?php 
    //Verificando si esta logeado el usuario
    require_once('../backend/class/class-clients.php');
    require_once('../backend/class/class-database.php');
    $database = new Database();
    if(!Cliente ::verificarAutenticacion($database->getDB()))
        header("Location: ../index.html");
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mini Mall | Cliente</title>
    <link rel="stylesheet" href="../css/bootstrap.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
    <link rel="stylesheet" href="../css/estilos.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
    <link rel="shortcut icon" href="../img/icon/MiniMallicon.png">
    <style>
        /* Background Main Window*/
        main {
            width: 100vw;
            height: 40vh;
            background-image: url(../img/lp-primary-image.jpeg);
            background-repeat: no-repeat;
            background-size: cover;
            background-position: right;
        }
    </style>
</head>

<body onload="ShowInfo()">
    <div class="row">
        <main class="col-12">
            <?php
                include_once('../components/navbar-login-client.php');
            ?>
            <div class="container mt-3 col-lg-10 animated ">
                <div class="fb-profile" id="profile-photo">
                    <img  class="fb-image-profile thumbnail" src="../img/profile-client.jpeg" alt="Profile image" />
                </div>
            </div>
        </main>
    </div>

    <!-- Tabs Visualización de Perfil -->
    <div id="tabs-client-profile" class="row p-0" style="height: 60vh">
        <div class="container p-0">
            <div class="row ">
                <div class="col-lg-3 col-md-6 col-sm-6 animated mt-5">
                    <div class="card mt-5 bg-transparent border-0 ml-auto mr-auto p-2" style="width: 18rem;">
                        <div class="card-body text-center mt-5">
                            <h5 id="client-name" class="card-text">Nombre Cliente</h5>
                            <h5 id="client-user" class="card-text">Nombre de Usuario</h5>
                            <h5 id="client-email" class="card-text">Correo Electronico</h5>
                            <button type="button" id="btn-logout-admin" class="card-text  btn-lg shadow p-2 px-5 mb-0 rounded-pill text-white" onclick="logout()">Cerrar Sesión</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-9 col-md-6 col-sm-6 animated">
                    <div class="container mt-3 mb-0">
                        <!-- Nav tabs -->
                        <ul class="nav nav-tabs nav-fill">
                            <li class="nav-item">
                                <a class="nav-link active text-dark" data-toggle="tab"
                                    href="#informacion">Información</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-dark" data-toggle="tab" href="#favoritos">Favoritos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-dark" data-toggle="tab" href="#editar">Editar Perfil</a>
                            </li>
                        </ul>

                        <!-- Tab panes -->
                        <div class="tab-content">
                            <div id="informacion" class="container p-0 tab-pane active">
                                <div class="col-12 bg-white">
                                    <div class="container-fluid p-5">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <b><i class="fas fa-user fa-fw"></i> Nombre Completo</b>
                                                <h6 id="info-client-name">Nombre del Cliente</h6><br>
                                                <b><i class="fas fa-user fa-fw"></i> Usuario</b>
                                                <h6 id="info-client-user">Usuario</h6><br>
                                                <b><i class="fas fa-at"></i>Correo Electronico</b>
                                                <h6 id="info-client-email">Correo</h6>
                                            </div>
                                            <div class="col-md-6">
                                                <b><i class="fas fa-globe-americas"></i> País</b>
                                                <h6 id="info-client-country">País</h6><br>
                                                <b><i class="fas fa-money-bill"></i> Moneda</b>
                                                <h6 id="info-client-currency">Moneda</h6><br>
                                                <b><i class="fas fa-universal-access"></i> Genero</b>
                                                <h6 id="info-client-gen">Genero</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="favoritos" class="container p-0 tab-pane fade">
                                <div class="col-12 bg-white">
                                    <div class="container-fluid p-5">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <b>Promociones</b>
                                                <div class="table-wrapper-scroll-y my-custom-scrollbar ">
                                                    <table class="table table-hover table-striped">
                                                        <thead class="table-warning">
                                                            <tr>
                                                                <th scope="col">Producto</th>
                                                                <th scope="col">Categoria</th>
                                                                <th scope="col">Precio Real</th>
                                                                <th scope="col">Descuento</th>
                                                                <th scope="col">Precio Oferta</th>
                                                                <th scope="col">Fin de Promoción</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody id="favorite-products"> 
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <b>Empresas</b>
                                                <div class="table-wrapper-scroll-y my-custom-scrollbar ">
                                                    <table class="table table-hover table-striped">
                                                        <thead class="table-warning">
                                                            <tr>
                                                                <th scope="col">Nombre</th>
                                                                <th scope="col">País</th>
                                                                <th scope="col">Moneda</th>
                                                                <th scope="col">Dirección</th>
                                                                <th scope="col">Telefono</th>
                                                                <th scope="col">Correo</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody id="favorite-companies">
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="editar" class="container tab-pane fade p-0">
                                <div class="col-12 bg-white p-4 ">

                                    <!-- Formulario precargado de la información que se tiene agregada -->
                                    <div class="form-row">
                                        
                                        <div class="form-group col-md-4">
                                            <b>Usuario</b>
                                            <input type="text" class="form-control" id="user-client"
                                                placeholder="Nombre de Usuario" onchange="EnableChange()">
                                            <input type="email" class="form-control my-1" id="email-client"
                                                placeholder="Email" onchange="EnableChange()">
                                        </div>

                                        <div class="form-group col-md-4">
                                            <b>País</b>
                                            <select id="country-select" class="form-control text-white" onchange="EnableChange()">
                                                <option>Seleccione País</option>
                                                <option value="Honduras">Honduras</option>
                                                <option value="Estados Unidos">Estados Unidos</option>
                                            </select>
                                            <small id="country-alert" class="form-text text-dark"></small>
                                            <select id="currency-select" class="form-control text-white my-1" onchange="EnableChange()">
                                                <option>Seleccione Moneda</option>
                                                <option value="Lempira">L Lempira</option>
                                                <option value="Dolar">$ Dolar</option>
                                            </select>
                                            <small id="currency-alert" class="form-text text-dark"></small>
                                        </div>

                                        <div class="form-group col-md-4">
                                            <b>Nombre Completo</b>
                                            <input type="text" class="form-control" id="first-name-client"
                                                placeholder="Nombres" onchange="EnableChange()">
                                            <input type="text" class="form-control my-1" id="last-name-client"
                                                placeholder="Apellidos" onchange="EnableChange()">
                                        </div>

                                        <div class="form-group col-md-4">
                                            <b>Contraseña</b>
                                            <input disabled type="password" class="form-control" id="password-client"
                                                placeholder="Contraseña">
                                            <input disabled type="password" class="form-control my-1" id="password-client-repeat"
                                                placeholder="Repita Contraseña">
                                        </div>

                                        <div class="form-group col-md-4">
                                            <b class="text-dark">Genero</b>
                                            <select id="sex-select-client" class="form-control text-white" onchange="EnableChange()">
                                                <option selected>Seleccione Genero</option>
                                                <option value="Masculino">Masculino</option>
                                                <option value="Femenino">Femenino</option>
                                                <option value="Otro">Otro</option>
                                            </select>
                                            <small id="gen-alert" class="form-text text-dark"></small>
                                            <div class="custom-file overflow-hidden rounded-pill my-2">
                                                <input id="pp-photo" type="file" class="custom-file-input rounded-pill" required accept="image/*">
                                                <label for="pp-photo" class="custom-file-label rounded-pill">Subir foto de perfil</label>
                                                <h1 style="visibility: hidden;" id="pp-url"></h1>
                                            </div>
                                        </div>


                                        <!-- Botón que se desbloqueará cuando el usuarío haga algún cambio -->
                                        <div class="form-group col-md-4">
                                            <div class="form-row align-items-center pt-3">
                                                <div class="col-auto mr-auto ml-auto">
                                                    <button id="btn-update-info" type="button"
                                                        class="btn btn-lg shadow p-2 px-3 mb-0 rounded-pill text-dark"
                                                        onclick="updateInfo();">Guardar Cambios</button>
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
        const ref = firebase.storage().ref('/client-users');
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
        $(window).on("load",function(){
            $(".loader-wrapper").fadeIn("slow");
        });
  </script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js">
      </script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.2/axios.min.js"></script>    <script src="js/bootstrap.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/control-client.js"></script>
</body>

</html>