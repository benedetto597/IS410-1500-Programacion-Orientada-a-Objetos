/* ---------------------------------- Examen #2 POO 1500 I PAC 2020 ---------------------------------- 
   ---------------------------------- Edgar Benedetto 20171033802   -------------------------------- */

var usuarios;
var empresas;
var categorias;
// Generando listas de categorias para pintarlas en pantalla ya estilizadas
function pintandoCategoriasLugo () {
    //console.log('Works');
    document.getElementById('contenedor-categorias').innerHTML = ``;
    //Consumir API de Categorias ---> GET
    axios({
        method: 'GET',
        url: '../backend/api/categorias.php',
        responseType: 'json'
    }).then(resCategorias => {
        categorias = resCategorias.data;
        for(let i=0;i<categorias.length;i++) {
            document.getElementById('contenedor-categorias').innerHTML += `
            <div class="col-lg-3 col-md-4 col-sm-6 mt-2">
                <div class="card-item card" style="background: ${categorias[i].color};" onclick="infoCategorias(${ i })">
                    <div class="row">
                        <div class="col mx-auto text-center m-3">
                            <i class="${categorias[i].icono} cat-icon"></i>
                        </div>
                        <div class="col">
    
                        </div>
                    </div>
                    <div class="row m-3 mt-4">
                        <section class="col">
                            <h3 class="text-white font-weight-bolder">${categorias[i].nombreCategoria}</h3>
                            <p class="text-white" style="font-size: 13px;">
                                ${categorias[i].empresas.length} Comercios
                            </p>
                        </section>
                    </div>
                </div>
            </div>
            `;
        }
    }).catch(error => {
        console.error(error);
    }); 
}
pintandoCategoriasLugo();

// Generando Usuarios 
function listaUsuarios() { 
    document.getElementById('usuarioActual').innerHTML = '';
    //Consumir API de Usuarios ---> GET
    axios({
        method: 'GET',
        url: '../backend/api/usuarios.php',
        responseType: 'json'
    }).then(resUsuarios => {
        usuarios = resUsuarios.data;
        for (let i=0;i<usuarios.length;i++) {
            document.getElementById('usuarioActual').innerHTML += 
            `<option value="${ i }">${ usuarios[i].nombre } ${ usuarios[i].apellido }</option>`;
        }
        verOrdenes();
    }).catch(error => {
        console.error(error);
    });
    
}

listaUsuarios();

// Onchange para seleccionar un usuario
function cambiarUsuario () {
    let usuarioSeleccionado = document.querySelector('#usuarioActual').value;
    document.getElementById('texto-hola').innerHTML = `¡Hola ${usuarios[usuarioSeleccionado].nombre}!`;
    return usuarioSeleccionado;
}

// Ver Ordenes de un usuario con el boton de ver ordenes
function verOrdenes() {
    let usuario = cambiarUsuario();
    //console.log(usuario);
    // Header Modal
    document.querySelector('#modalUserLabel').innerHTML = `${usuarios[usuario].nombre} , Estas Son Tus Ordenes.`;
    // Zona de Productos
    //console.log(usuarios[usuario].ordenes.length);
    document.querySelector('#zona-productos').innerHTML = '';
    for(let i=0;i<usuarios[usuario].ordenes.length;i++) {
        document.querySelector('#zona-productos').innerHTML += `
            <p>
                <h3 style="color: #563D7C; font-weight: bold;">${ usuarios[usuario].ordenes[i].nombreProducto }</h3>
            </p>
            <p style="font-size: 18px;">
                ${usuarios[usuario].ordenes[i].descripcion}
            </p>
            <p class="ml-auto">
                <b style="font-size: 25px">$${usuarios[usuario].ordenes[i].precio}</b>
            </p>
            <hr>
        `;
    }
}

// Ver info sobre categorias
function infoCategorias(idCategoria) {
    document.getElementById('zona-categorias').innerHTML = ``;
    //Consumir API de Empresas ---> GET
    axios({
        method: 'GET',
        url: '../backend/api/empresas.php',
        responseType: 'json'
    }).then(resEmpresas => {
        empresas = resEmpresas.data;
        $('#modalCategorias').modal('show');
        //console.log(categorias[idCategoria].nombreCategoria);
        document.getElementById('header-categorias').innerHTML = `${ categorias[idCategoria].nombreCategoria }`;
        
        for(let i=0;i<categorias[idCategoria].empresas.length;i++) {
            const productosPintar = empresas[i];
            let productos = '';
            for(let j=0;j<productosPintar.productos.length;j++) {
                productos += `
                    <div class="row p-2">
                        <div class="col-lg-7">
                            <h4 style="color:#563D7C;">${ productosPintar.productos[j].nombreProducto }</h4>
                        </div>
                        <div class="col-lg-5">
                            <input type="button" class="btn btn-secondary" onclick="pedir(${ idCategoria } , ${ i } ,${ j })" value="Pedir">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-8">
                            <p>${ productosPintar.productos[j].descripcion }</p>
                        </div>
                        <div class="col-lg-4 ml-auto">
                            <b>$ ${ productosPintar.productos[j].precio }</b>
                        </div>
                    </div>
                    
                `;
            }
            document.getElementById('zona-categorias').innerHTML += `
                <div class="col-lg-6 col-sm-12 mt-2">
                    <div class="card" style="border-radius:12px">
                        <section>
                            <img src="img/banner.jpg" class="img-fluid" style="border-radius: 12px"/>
                            <h3 style="color: #fff; font-weight:bolder;">${empresas[i].nombreEmpresa }</h3>
                        </section>
                        <section class="p-3">
                            ${ productos }
                        </section>
                    </div>
                </div>
            `;
        }
    }).catch(error => {
        console.error(error);
    });
    
};

// Funcion para pedir orden a los usuarios
function pedir (idCategoria , idEmpresa , idProducto) {
    $('#modalPedidos').modal('show');

    var nombreProduct = empresas[idEmpresa].productos[idProducto].nombreProducto;
    var description = empresas[idEmpresa].productos[idProducto].descripcion;
    var valor = empresas[idEmpresa].productos[idProducto].precio;
    document.getElementById('zona-pedidos').innerHTML =`
        <h3>${ empresas[idEmpresa].productos[idProducto].nombreProducto }</h3><br>
        <p>${ empresas[idEmpresa].productos[idProducto].descripcion }</p><br>
        <div class="row">
            <div class="col-lg-4">
                Cantidad A Solicitar : 
            </div>
            <div class="col-lg-8">
                <input type="text" class="form-control" id="txt-cantidad" />    
            </div>
        </div>
        <div class="row">
            <div class="col-lg-10 mr-auto">
                
            </div>
            <div class="col-lg-2"><br>
            <b>$ ${empresas[idEmpresa].productos[idProducto].precio }</b>
            </div>
        </div>
        <div class="modal-footer">
            <button type="button" onclick="agregarPedido('${nombreProduct}','${description}',${valor})" 
            class="btn btn-secondary">
            Procesar Orden</button>
        </div>
    `;
}

// Funcion para agregar un producto nuevo a un usuario 
function agregarPedido(nombreProduct,description,valor) {
    let cantidad = document.getElementById('txt-cantidad').value;
    let usuario = cambiarUsuario();
    let orden =
        {
            nombreProducto:nombreProduct,
            descripcion: description,
            cantidad: cantidad,
            precio: valor
        };
    usuarios[usuario].ordenes.push(orden);
    //Consumir API de Usuarios ---> PUT
    axios({
        method: 'PUT',
        url: `../backend/api/usuarios.php?id=${usuario}`,
        responseType: 'json',
        data: usuarios[usuario]
    }).then(resUsuarios =>{
        usuarios = resUsuarios.data;
        verOrdenes();
    }).catch(error =>{
        console.error(error);
    });
    
    $('#modalPedidos').modal('hide');
    $('#modalCategorias').modal('hide');
}

// creando una nueva categoria
function crearCategoria() {
    $('#modalPedidos').modal('hide');
    $('#modalCategorias').modal('hide');
    $('#modalCreacionCategoria').modal('show');

}

function guardar() {
    let txtnombre = document.getElementById('txt-nombre').value;
    let txtdescripcion = document.getElementById('txt-descripcion').value;
    let txtcolor = document.getElementById('txt-color').value;
    let txticono = document.getElementById('txt-icono').value;
    let categoria = 
    {
        nombreCategoria:txtnombre,
        descripcion:txtdescripcion,
        color:txtcolor,
        icono:txticono,
        empresas:[]
    };
    
    //Consumir API de Categorias ---> POST
    axios({
        method: 'POST',
        url: '../backend/api/categorias.php',
        responseType: 'json',
        data: categoria
    }).then(resCategorias =>{
        console.log(resCategorias.data);
        pintandoCategoriasLugo();
    }).catch(error =>{
        console.error(error);
    });
    $('#modalCreacionCategoria').modal('hide');
}