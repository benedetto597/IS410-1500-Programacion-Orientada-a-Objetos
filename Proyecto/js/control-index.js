// --------------------------------- Barras de Navegacion ---------------------------------
//Logo
document.getElementById('logo').innerHTML = `<img id="Mini-Mall-mainlogo" class="img-responsive" src="img/icon/MiniMall.png">`;
//Dropdown de registro
if (document.getElementById('register-dropdown')) {
    document.getElementById('register-dropdown').innerHTML = `<a class="dropdown-item" href="register/register-client.php">Cliente</a>
    <a class="dropdown-item" href="register/register-company.php">Empresa</a>
    <a class="dropdown-item" href="register/register-admin.php">Super Admin</a>`;
}

//Dropdown de cliente
if (document.getElementById('client-dropdown')) {
    document.getElementById('client-dropdown').innerHTML = `<a class="dropdown-item" href="profiles/profile-client.php">Ver Perfil</a>
    <a class="dropdown-item" href="profiles/profile-client.php">Editar Perfil</a>
    <a class="dropdown-item" href="#" onclick="logoutClient()">Cerrar Sesión</a>`;
    document.getElementById('cart').innerHTML = `<a class="nav-link" href="cart.php">
    <h6 class="text-dark"><i class="fas fa-shopping-cart fa-fw"></i>Carrito</h6>
    </a>`;

}

//Dropdown de Empresa
if (document.getElementById('company-dropdown')) {
    document.getElementById('company-dropdown').innerHTML = `<a class="dropdown-item" href="profiles/profile-company.php">Ver Perfil</a>
    <a class="dropdown-item" href="profiles/profile-company.php">Editar Perfil</a>
    <a class="dropdown-item" href="#" onclick="logoutCompany()">Cerrar Sesión</a>`;
    document.getElementById('branch').innerHTML = `<a class="nav-link" href="register/register-branch.php">
    <h6 class="text-dark"><i class="fas fa-plus fa-fw"></i>Sucursal</h6>
    </a>
    `;
}

//Dropdown de Administrador
if (document.getElementById('admin-dropdown')) {
    document.getElementById('admin-dropdown').innerHTML = `<a class="dropdown-item" href="profiles/profile-admin.php">Ver Perfil</a>
    <a class="dropdown-item" href="profiles/profile-admin.php">Editar Perfil</a>
    <a class="dropdown-item" href="#" onclick="logoutAdmin()">Cerrar Sesión</a>`;
}
// --------------------------------- Cerrar Sesión --------------------------------- 
function logoutClient() {
    axios({
        method: 'GET',
        url: 'backend/axios/clients.php?action=logout',
        responseType: 'json',
    }).then(resClient => {
        window.location.href = 'index.php';
    }).catch(error => {
        console.log(error);
    });
}

function logoutCompany() {
    axios({
        method: 'GET',
        url: 'backend/axios/companies.php?action=logout',
        responseType: 'json',
    }).then(resAdmin => {
        //console.log(resAdmin.data);
        window.location.href = 'index.php';
    }).catch(error => {
        console.log(error);
    });
}

function logoutAdmin() {
    axios({
        method: 'GET',
        url: 'backend/axios/admin.php?action=logout',
        responseType: 'json',
    }).then(resAdmin => {
        window.location.href = 'index.php';
    }).catch(error => {
        console.log(error);
    });
}

// --------------------------------- Carrusel --------------------------------- 
var products =[];
var companies =[];

axios({
    method: 'GET',
    url: 'backend/axios/products.php?all',
    responseType: 'json',
}).then(resProduct =>{
    let keys = Object.keys(resProduct.data);
        let values = Object.values(resProduct.data);
       
        for(let i = 0; i<keys.length; i++){
            let product = {};
            if(values[i].promocionesProducto){
                //Obtener los comentarios para la seccion final del landing page
                product['key'] = keys[i];
                product['productName'] = values[i].nombreProducto;
                product['productuImg'] = values[i].imgProducto;
                /*
                product['sucursales'] = [];
                for(let h=0; h<values[i].promocionesProducto.length; h++){
                    for(let l=0; values[i].promocionesProducto[h].sucursalPromocion.length;l++){
                        product['sucursales'].push = values[i].promocionesProducto[h].sucursalPromocion[l];
                    }
                }*/
                products.push(product);
            }   
        }

        for(let j=1; j<products.length+1; j++){
            document.getElementById(`${j}`).src = `${products[j-1].productuImg}`;
            document.getElementById(`${j}`).style = "border: 2px solid #EEC058;";
        }
        for(let k=products.length+1; k<21;k++){
            document.getElementById(`${k}`).style = "visibility: hidden";
        }
    }).catch(error =>{
        console.log(error);
    });
    
// ------------------------------- Mapa de sucursales con promociones -------------------------------
var places = [];
axios({
    method: 'GET',
    url: 'backend/axios/companies.php?all',
    responseType: 'json',
}).then(resCompany =>{
    let keys = Object.keys(resCompany.data);
        let values = Object.values(resCompany.data);
       
        for(let i = 0; i<keys.length; i++){
            let company = {};
            if(values[i].sucursalesEmpresa){
                company['key'] = keys[i];
                for(let h=0; h<values[i].sucursalesEmpresa.length; h++){
                    company['nameBranch'] = values[i].sucursalesEmpresa[h].nombreSucursal;
                    company['latBranch'] = values[i].sucursalesEmpresa[h].latitudSucursal;
                    company['longBranch'] = values[i].sucursalesEmpresa[h].longitudSucursal;
                    let place = [company['nameBranch'],company['latBranch'],company['longBranch']];
                    places.push(place);
                }
                products.push(company);
            }   
        }
        for (var i = 0; i < places.length; i++) {
            marker = L.marker([places[i][1],places[i][2]])
                .bindPopup(places[i][0])
                .addTo(mymap);
        }
        
}).catch(error =>{
    console.log(error);
});   

      