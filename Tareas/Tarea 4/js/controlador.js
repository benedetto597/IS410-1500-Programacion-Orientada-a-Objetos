var usuarios;
var posts;
var comentarios;
var historias;
var codUsuarioSeleccionado;
var nombreUsuarioSeleccionado;

function cargarInfo() {
    axios({
        method: 'GET',
        url: 'axios/usuarios.php',
        responseType: 'json'
    }).then(resUsuarios => {
        this.usuarios = resUsuarios.data;
        llenarSelect();
    }).catch(error => {
        console.error(error);
    });
}

cargarInfo();

function llenarSelect() {
    for (let i = 0; i < usuarios.length; i++) {
        document.getElementById('usuario-actual').innerHTML += `
        <option value="${usuarios[i].codigoUsuario}">${usuarios[i].nombre}</option>
        `;
    }
    usuarioSeleccionado();
}

function usuarioSeleccionado(){
    axios({
        method: 'GET',
        url: 'axios/usuarios.php',
        responseType: 'json'
    }).then(resUsuarios => {
        this.usuarios = resUsuarios.data;
        codUsuarioSeleccionado = document.getElementById('usuario-actual').value;
        var select = document.getElementById("usuario-actual");
        nombreUsuarioSeleccionado = select.options[select.selectedIndex].text;
        obtenerPosts(codUsuarioSeleccionado, nombreUsuarioSeleccionado, usuarios[codUsuarioSeleccionado].imagen);
        obtenerHistorias(nombreUsuarioSeleccionado); 
    }).catch(error => {
        console.error(error);
    });
}

function obtenerHistorias(nombreUsuario){
    axios({
        method: 'GET',
        url: 'axios/historias.php',
        responseType: 'json'
    }).then(resHistorias =>{
        this.historias = resHistorias.data;
        mostrarHistorias(nombreUsuario);
    }).catch(error =>{
        console.error(error);
    });
}

function obtenerPosts(codigoUsuario, usuario, imagenUsuario) {
    axios({
        method: 'GET',
        url: 'axios/posts.php',
        responseType: 'json'
    }).then(resPosts => {
        this.posts = resPosts.data;
        obtenerComentarios(codigoUsuario, posts);
    }).catch(error => {
        console.error(error);
    });
}

function obtenerComentarios(codigoUsuario, posts) {
    axios({
        method: 'GET',
        url: 'axios/comentarios.php',
        responseType: 'json'
    }).then(resComentarios => {
        this.comentarios = resComentarios.data;
        mostrarPosts(codigoUsuario, posts, comentarios);
        
    }).catch(error => {
        console.error(error);
    });
}

function mostrarHistorias(nombreUsuario){
    document.getElementById('historias-siguiendo').innerHTML = `<div class="card-header">
    Stories
  </div>`;
    for(let i = 0; i < historias.length; i++){
        if(historias[i].usuario == nombreUsuario){
            if(i + 1 < historias.length){
                i++;
            }else{
                return console.log("Done");
            }
        }
        document.getElementById('historias-siguiendo').innerHTML += `
        <div class="px-1 py-2 story-card pointer" onclick="verHistoria(${historias[i].codigoHistoria});">
            <div class="fl">
                <img class="img-fluid img-thumbnail rounded-circle img-thumbnail-historia" src="${historias[i].imagenUsuario}">
            </div>  
            <div class="py-1 px-1 fl">
                <small><b>${historias[i].usuario}(${historias[i].historia.length})</b></small><br>
                <small class="muted">12/12/2012</small>
            </div>
        </div>
        `;
    }   
}

function verHistoria(codigoHistoria) {
    //console.log(`Ver historia ${codigoHistoria} del usuario ${codigoUsuario} `);
    document.getElementById('mostrar-historias').innerHTML = ``;
    axios({
        method: 'GET',
        url: 'axios/historias.php',
        responseType: 'json'
    }).then(resHistorias =>{
        this.historias = resHistorias.data;
        document.getElementById('viendo-historias').innerHTML = `Viendo historias de ${historias[codigoHistoria -1].usuario}`;
        for(let i = 0; i < historias[codigoHistoria - 1].historia.length; i++){
            document.getElementById('mostrar-historias').innerHTML += `
            <div class="historia">
                <div class="historia-image-post" style="background-image: url(${historias[codigoHistoria - 1].historia[i].imagen})">
                    <div class="historia-titulo">${historias[codigoHistoria - 1].historia[i].titulo}</div>
                </div>
            </div>
            `;
            
        }
    }).catch(error =>{
        console.error(error);
    });
    $('#ver-historia').modal('show');  
}

function mostrarPosts(codUsuario, posts, comentarios) {

    document.getElementById('posts').innerHTML = ``;
    for (let i = 0; i < posts.length; i++) {
        if (posts[i].codigoUsuario == codUsuario -1) {
            if(i+1 < posts.length){
                i++;
            }else{
                return console.log("Done");
            }
        }
        document.getElementById('posts').innerHTML += `
        <div class="col-lg-12">
            <div class="card mb-4 shadow-sm">
                <div class="card-header">
                    <img class="img-fluid img-thumbnail rounded-circle" src="${usuarios[posts[i].codigoUsuario].imagen}">    
                    <span>${usuarios[posts[i].codigoUsuario].nombre}</span>
                </div>
                <div class="card-body px-0 py-0">
                    <div class="image-post" style="background-image: url(${posts[i].imagen});">
                    </div>
                    <div class="px-3 py-3 post">
                        <span class="pointer" onclick="like(${posts[i].codigoPost} );"><i class="far fa-heart" id="heart-${posts[i].codigoPost}"></i></span>&nbsp;${posts[i].cantidadLikes} Likes<br>
                        <span class="post-user">${usuarios[posts[i].codigoUsuario].nombre}</span>
                        <span class="post-content">${posts[i].contenidoPost}</span>
                        <hr>
                        <b>Comments</b><br>
                        <div id="comentarios-${i}">
                        </div>
                            <div class="px-0">
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Comment" id="comentario-post-${posts[i].codigoPost}">
                                        <div class="input-group-append">
                                            <button type="button" onclick="comentar(${posts[i].codigoPost});" class="btn btn-outline-danger"><i class="far fa-paper-plane"></i></button>
                                        </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        `;
        for (let j = 0; j < comentarios.length; j++) {
            if(comentarios[j].codigoPost == posts[i].codigoPost){
                document.getElementById(`comentarios-${i}`).innerHTML += `            
                <span class="post-user">${comentarios[j].usuario}</span>
                <span class="post-content">${comentarios[j].comentario}</span>
                <hr>            
                `;
            }
        }
    }
}

function like(codPost){
    let post = {
        'codigoPost': parseInt(codPost),
        'codigoUsuario': posts[codPost - 1].codigoUsuario,
        'contenidoPost': posts[codPost - 1].contenidoPost,
        'imagen':posts[codPost - 1].imagen,
        'cantidadLikes' : (posts[codPost - 1].cantidadLikes) + 1
    }
    axios({
        method: 'PUT',
        url: `axios/posts.php?id=${codPost - 1}`,
        responseType: 'json',
        data: post
    }).then(resPosts =>{
        usuarioSeleccionado();
    }).catch(error =>{
        console.error(error);
    });
}

function comentar(codigoPost) {
    //console.log(`Comentar el post ${codigoPost} con el comentario ${$("#comentario-post-"+codigoPost).val()}`);
    let nuevoComentario = {
        'codigoComentario': (comentarios.length) + 1,
        'codigoPost': codigoPost,
        'usuario': nombreUsuarioSeleccionado,
        'comentario': `${$("#comentario-post-"+codigoPost).val()}`
    };

    axios({
        method: 'POST',
        url: 'axios/comentarios.php',
        responseType: 'json',
        data: nuevoComentario
    }).then(resComentarios =>{
        usuarioSeleccionado();
    }).catch(error =>{
        console.error(error);
    });
}

function publicarPost(){
    let nuevoPost = {
        'codigoPost': (posts.length) +1,
        'codigoUsuario': (parseInt(codUsuarioSeleccionado)) -1,
        'contenidoPost': document.getElementById('contenido-post').value,
        'imagen': document.getElementById('url-imagen').value,
        'cantidadLikes': 0
    }
    axios({
        method: 'POST',
        url: 'axios/posts.php',
        responseType: 'json',
        data: nuevoPost
    }).then(resPosts =>{
        usuarioSeleccionado();
    }).catch(error =>{
        console.error(error);
    });
    $('#nuevo-post').modal('hide'); 
}