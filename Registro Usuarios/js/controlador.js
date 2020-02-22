/*
Modelo: Todo lo relacionado con la logica de negocio y acceso a datos.
    Backend: PHP,BD, y similares
Vista: Lo que el usuario ve (GUI)
    HTML, CSS
Controlador: Controlar los eventos del usuario, definir comportamientos y acciones.
    Javascript
*/

var informacion=[];

function login(){
    var campos = [
        {campo:'nombre',valido:false},
        {campo:'apellido',valido:false},
        {campo:'email',valido:false},
        {campo:'usuario',valido:false},
        {campo:'password',valido:false}
    ];
    document.getElementById('div-exito').style.display = 'none';
    for (var i=0; i<campos.length;i++){
        campos[i].valido = validarCampoVacio(campos[i].campo);
    }

    //Con uno que no este valido ya no debería mostrar el div
    for (var i=0; i<campos.length;i++){
        if (!campos[i].valido)
            return;
    }

    //En este punto significa que todo esta bien
    document.getElementById('div-exito').style.display = 'block';
    informacion.push({
        nombre:document.getElementById('nombre').value,
        apellido:document.getElementById('apellido').value,
        usuario:document.getElementById('usuario').value,
        email:document.getElementById('email').value,
        password:document.getElementById('password').value
    });
    actualizarTabla();    
}


function validarCampoVacio(id){
    if (document.getElementById(id).value == ''){
        document.getElementById('div-error-'+id).style.display = 'block';
        document.getElementById(id).classList.add('input-error');
        return false;
    }
    document.getElementById('div-error-'+id).style.display = 'none';
    document.getElementById(id).classList.remove('input-error');
    return true;
}

function validarCorreo(etiquetaCorreo){
    //console.log(etiquetaCorreo.value);
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(etiquetaCorreo.value))
        etiquetaCorreo.classList.remove('input-error');//console.log('Correo válido');
    else
        etiquetaCorreo.classList.add('input-error');
}

function actualizarTabla(){
    document.getElementById('tabla-usuarios').innerHTML = '';
    for(var i=0; i<informacion.length;i++){
        //innerHTML se utiliza para imprimir html interno en la etiqueta indicada
        document.getElementById('tabla-usuarios').innerHTML +=
                `<tr>
                    <td>${informacion[i].nombre}</td>
                    <td>${informacion[i].apellido}</td>
                    <td>${informacion[i].usuario}</td>
                    <td>${informacion[i].email}</td>
                    <td>${informacion[i].password}</td>
                    <td><button type="button" onclick="eliminar(${i});">Eliminar ${i}</button></td>
                </tr>`;
        //console.log(informacion[i].nombre);
    }
}

function eliminar(indice){
    //console.log("Se eliminara el registro " + indice);
    informacion.shift(indice); //Se elimina el registro del arreglo
    actualizarTabla();
}

/*
/[0-9]{4}-[0-9]{4}-[0-9]{5}/
*/