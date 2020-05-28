<?php 
echo '<nav class="navbar navbar-expand-lg navbar-light bg-light ">
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-main" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon" ></span>
</button>
<div class="collapse navbar-collapse" id="navbar-main">
    <div class="row m-0 w-100">
        <ul id="main-navbar" class="nav navbar-nav mr-auto px-5 my-auto">
            <li class="nav-item">
                <div class="btn-group dropright">
                    <button type="button" class="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fas fa-user fa-fw"></i>Administrador</button>
                    <div class="dropdown-menu" >
                        <a class="dropdown-item" href="../profiles/profile-admin.php">Ver Perfil</a>
                        <a class="dropdown-item" href="../profiles/profile-admin.php">Editar Perfil</a>
                        <a class="dropdown-item" href="#" onclick="logout()">Cerrar Sesión</a>
                    </div>
                </div>
            </li>
            <li class="nav-item">
                <div class="btn-group dropright" style="visibility: hidden;">
                    <button type="button" class="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fas fa-user-plus fa-fw"></i>Registrarse</button>
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
                <a class="nav-link" href="#"><h6 class="text-dark">Iniciar Sesión Iniciar Inic</h6></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="../cart.html"><h6 class="text-dark"><i class="fas fa-building fa-fw"></i>Planes</h6></a>
            </li>
        </ul>
    

    </div>  
</div>
</nav>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div id="navbar-menu" class="w-100">
        <ul class="nav navbar-nav px-5  my-auto">
            <li class="nav-item mr-auto">
                <a class="nav-link" href="../index.html"><h6 class="text-dark"><i class="fas fa-home fa-fw"></i>Inicio</h6></a>
          </li>
            <li class="nav-item mr-auto ml-auto">
                <div class="btn-group">
                    <button type="button" class="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fas fa-percent fa-fw"></i>Promociones</button>
                    <div class="dropdown-menu" >
                        <a class="dropdown-item" href="../promotions/product-company-list.html"> <i class="fas fa-building fa-fw"></i>Productos y Empresas</a>
                        <a class="dropdown-item" href="../promotions/categories.html"><i class="fas fa-th-large fa-fw"></i>Categorías</a>
                        <a class="dropdown-item" href="../promotions/last-products.html"><i class="fas fa-stopwatch fa-fw"></i>Últimas Promociones</a>
                    </div>
                </div> 
            </li>
            <li class="nav-item ml-auto">
                <a class="nav-link" href="../contact.html"><h6 class="text-dark"><i class="fas fa-phone-volume fa-fw"></i>Contactanos</h6></a>
            </li>
        </ul>
    </div>
</nav>'
?>