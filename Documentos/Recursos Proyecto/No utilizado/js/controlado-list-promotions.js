// --------------------------------- Barras de Navegacion ---------------------------------
//Logo
document.getElementById('logo').innerHTML = `<img id="Mini-Mall-mainlogo" class="img-responsive" src="../img/icon/MiniMall.png">`;

//Dropdown de registro
if(document.getElementById('register-dropdown')){
    document.getElementById('register-dropdown').innerHTML = `<a class="dropdown-item" href="../register/register-client.php">Cliente</a>
    <a class="dropdown-item" href="../register/register-company.php">Empresa</a>
    <a class="dropdown-item" href="../register/register-admin.php">Super Admin</a>`;
}

//Dropdown de cliente
if(document.getElementById('client-dropdown')){
    document.getElementById('client-dropdown').innerHTML = `<a class="dropdown-item" href="../profiles/profile-client.php">Ver Perfil</a>
    <a class="dropdown-item" href="../profiles/profile-client.php">Editar Perfil</a>
    <a class="dropdown-item" href="#" onclick="logoutClient()">Cerrar Sesión</a>`;
    document.getElementById('cart').innerHTML = `<a class="nav-link" href="../cart.php">
    <h6 class="text-dark"><i class="fas fa-shopping-cart fa-fw"></i>Carrito</h6>
    </a>`;
    
}

//Dropdown de Empresa
if(document.getElementById('company-dropdown')){
    document.getElementById('company-dropdown').innerHTML = `<a class="dropdown-item" href="../profiles/profile-company.php">Ver Perfil</a>
    <a class="dropdown-item" href="../profiles/profile-company.php">Editar Perfil</a>
    <a class="dropdown-item" href="#" onclick="logoutCompany()">Cerrar Sesión</a>`;
    document.getElementById('branch').innerHTML = `<a class="nav-link" href="../register/register-branch.php">
    <h6 class="text-dark"><i class="fas fa-plus fa-fw"></i>Sucursal</h6>
    </a>
    `;
}

//Dropdown de Administrador
if(document.getElementById('admin-dropdown')){
    document.getElementById('admin-dropdown').innerHTML = `<a class="dropdown-item" href="../profiles/profile-admin.php">Ver Perfil</a>
    <a class="dropdown-item" href="../profiles/profile-admin.php">Editar Perfil</a>
    <a class="dropdown-item" href="#" onclick="logoutAdmin()">Cerrar Sesión</a>`;
}

// --------------------------------- Cerrar Sesión ---------------------------------

function logoutClient(){
    axios({
        method: 'GET',
        url: '../backend/axios/clients.php?action=logout',
        responseType: 'json',
    }).then(resAdmin =>{
        window.location.href = '../index.php';
    }).catch(error =>{
        console.log(error);
    });
}

function logoutCompany(){
    axios({
        method: 'GET',
        url: '../backend/axios/companies.php?action=logout',
        responseType: 'json',
    }).then(resAdmin =>{
        window.location.href = '../index.php';
    }).catch(error =>{
        console.log(error);
    });
}

function logoutAdmin(){
    axios({
        method: 'GET',
        url: '../backend/axios/admin.php?action=logout',
        responseType: 'json',
    }).then(resAdmin =>{
        window.location.href = '../index.php';
    }).catch(error =>{
        console.log(error);
    });
}
