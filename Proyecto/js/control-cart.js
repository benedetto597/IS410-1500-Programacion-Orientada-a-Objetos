// --------------------------------- Barras de Navegacion ---------------------------------
//Logo
document.getElementById('logo').innerHTML = `<img id="Mini-Mall-mainlogo" class="img-responsive" src="img/icon/MiniMall.png">`;
//Dropdown de cliente
document.getElementById('boton').style = 'color:white';
document.getElementById('client-dropdown').innerHTML = `<a class="dropdown-item" href="profiles/profile-client.php">Ver Perfil</a>
<a class="dropdown-item" href="profiles/profile-client.php">Editar Perfil</a>
<a class="dropdown-item" href="#" onclick="logoutClient()">Cerrar Sesión</a>`;
document.getElementById('cart').innerHTML = `<a class="nav-link " href="cart.php">
<h6 class="text-white"><i class="fas fa-shopping-cart fa-fw"></i>Carrito</h6>
</a>`;

// --------------------------------- Cerrar Sesión ---------------------------------
function logoutClient(){
    axios({
        method: 'GET',
        url: 'backend/axios/clients.php?action=logout',
        responseType: 'json',
    }).then(resAdmin =>{
        window.location.href = 'index.php';
    }).catch(error =>{
        console.log(error);
    });
}
