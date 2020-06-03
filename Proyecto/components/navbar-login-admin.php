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
                    <div class="dropdown-menu" id="admin-dropdown">
                        
                    </div>
                </div>
            </li>
            <li class="nav-item">
                <div class="btn-group dropright" style="visibility: hidden;">
                    <button type="button" class="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fas fa-user-plus fa-fw"></i>Registrarse</button>
                    <div class="dropdown-menu" >
                        
                    </div>
                </div>
            </li>
        </ul>       
        <a class="navbar-brand" href="#" id="logo"></a>
        <ul id="main-navbar" class="nav navbar-nav ml-auto px-5 my-auto">
            <li class="nav-item invisible">
                <a class="nav-link" href="#"><h6 class="text-dark">Iniciar Sesión Iniciar Inic</h6></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="../cart.php"><h6 class="text-dark"><i class="fas fa-building fa-fw"></i>Planes</h6></a>
            </li>
        </ul>
    

    </div>  
</div>
</nav>
'
?>