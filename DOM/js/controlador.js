/* 
Modelo Vista Controlador (Patron MVC):
    Patron de Desarrollo usado para aplicaciones que tienen GUI.
    Objetivo es segmentar en 3 componentes, modelo, vista y controlador.
    Vista (Html, CSS).
    Controlador --> Gestiona acciones del usuario que se hacen en JS.
        
        Se hace un controlador (un JS) por cada Vista (por cada HTML).
    Modelo --> Capa de Datos, Logica de Negocios: Backend - PHP y las bases de datos.
    
Document Object Model (DOM):
    Objeto que almacena una jerarquia de nodos donde cada nodo hace referencia a una etiquta HTML.
    Representado por un nodo principal llamado document.
*/

//Obtener contenido de una etiqueta por id getElementById, innerHTML retorna el texto HTML
console.log(document.getElementById('parrafo1').innerHTML); //Retorna un Objeto que representa la etiqueta

//Asignar un nuevo dato a la etiqueta por su id
document.getElementById('parrafo1').innerHTML = '<h1>Este es el nuevo texto del parrafo 1</h1>';


function login(){
    // Se usa la propiedad value de la etiqueta obtenida por su id que sería un objeto (por eso tiene value)
    console.log(`Usuario: ${document.getElementById('usuario').value} ,Password: ${document.getElementById('password').value}`);
    document.getElementById('resultado').innerHTML = `Usuario: ${document.getElementById('usuario').value} ,Password: ${document.getElementById('password').value}`;
    validarCampoVacio('usuario');
    validarCampoVacio('password');
}

function validarCampoVacio(id){
    if (document.getElementById(id).value == ''){
        //Agregar o remover la clase css de un elemento por su id
        document.getElementById(id).classList.remove('input-success');
        document.getElementById(id).classList.add('input-error');
    }else{ 
        document.getElementById(id).classList.remove('input-error');
        document.getElementById(id).classList.add('input-success');
    }
}

function asignarValores(){
    document.getElementById('usuario').value = 'elbrayan';
    document.getElementById('password').value = 'asd.456';
}

function mostrarParrafos(){
    //document.querySelector('p'); //Selecciona solo el primer elemento que cumpla con el selector.
    let parrafos = document.querySelectorAll('p'); //Retorna todas las etiquetas en un
    for(let i = 0; i< parrafos.length;i++)
        console.log(parrafos[i].innerHTML);
}

function mostrarSeccion(){
    //document.getElementById('contenido').style.backgroundColor = '#ff0000';
    document.getElementById('contenido').style.display = 'block';
}

function ocultarSeccion(){
    document.getElementById('contenido').style.display = 'none';
}

function validarEmail(etiqueta){
    console.log(etiqueta.value);
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(etiqueta.value)){
        etiqueta.classList.remove('input-error');
        etiqueta.classList.add('input-success');
    }else{ 
        etiqueta.classList.remove('input-success');
        etiqueta.classList.add('input-error'); 
    }
}