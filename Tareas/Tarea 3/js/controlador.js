var usuarios;
var artistas;
var cancionAgregar;
var usuarioActualizar;
var usuarioSeleccionado = 0;
var usuarioId;

function mostrarInfo() {
    llenarSideBarArtistas();
    llenarModalUsuarios();
}

function llenarSideBarArtistas() {
    document.getElementById('artistas-lista').innerHTML = ``;
    $.ajax({
        url: 'php/artistas.php',
        method: 'get',
        data: '',
        dataType: 'json',
        success: function (resArtistas) {
            this.artistas = resArtistas;
            for (let i = 0; i < this.artistas.length; i++) {
                document.getElementById('artistas-lista').innerHTML += `
                <li class="nav-item">
                    <div class="nav-link" onclick="verArtista(${this.artistas[i].codigoArtista})"><i class="fas fa-music"></i> ${this.artistas[i].nombreArtista}</div>
                </li>
                `
            }
        },
        error: function (xhr, textStatus, errorMessage) {
            console.log("ERROR " + errorMessage + " " + textStatus + " " + xhr.responseText);
        }
    });
}

function verArtista(codigoArtista) {
    //console.log('Ver artista con codigo: ' + codigoArtista);
    document.getElementById('vista-artista').innerHTML = ``;

    $.ajax({
        url: 'php/artistas.php',
        method: 'get',
        data: '',
        dataType: 'json',
        success: function (resArtistas) {
            this.artistas = resArtistas;
            for (let i = 0; i < this.artistas.length; i++) {
                if (this.artistas[i].codigoArtista == codigoArtista) {
                    for (let j = 0; j < this.artistas[i].albumes.length; j++) {
                        document.getElementById('vista-artista').innerHTML += `
                    <section class="container-fluid">
                    <div class="row">
                        <div class="col-4 text-center">
                            <div class="cover-image" style="background-image:url(${this.artistas[i].albumes[j].caratulaAlbum});">
                            </div><br>
                            <h5 class="text-muted">${this.artistas[i].albumes[j].nombreAlbum}</h5>
                            <button class="btn btn-success" type="button">Play</button>
                            </div>
                        <div class="col-8" id="canciones-album-${j}">
                        </div>
                        </div>
                    </section>
                    
                    <hr>`;
                        //document.getElementById(`canciones-album-${j}`).innerHTML = ``;
                        for (let k = 0; k < this.artistas[i].albumes[j].canciones.length; k++) {
                            document.getElementById(`canciones-album-${j}`).innerHTML += `
                        <div class="row song-item">
                            <div class="col-1"><i class="fas fa-play"></i></div>
                            <div class="col-10">
                                <div class="song-title">${this.artistas[i].albumes[j].canciones[k].nombreCancion}</div>
                                <div class="song-description">${this.artistas[i].nombreArtista} - ${this.artistas[i].albumes[j].nombreAlbum}</div>
                            </div>
                            <div class="col-1">
                                <span>${this.artistas[i].albumes[j].canciones[k].duracion}</span>
                                <button onclick="agregarCancion(${i},${j},${k})" class="btn btn-outline-success btn-sm"
                                title="Agregar a playlist"><i class="fas fa-plus"></i></button>
                            </div>
                        </div>
                        `
                        }
                    }
                }
            }

        },
        error: function (xhr, textStatus, errorMessage) {
            console.log("ERROR " + errorMessage + " " + textStatus + " " + xhr.responseText);
        }
    });
    $("#vista-artista").show();
    $("#vista-playlist").hide();
}

function llenarModalUsuarios() {
    document.getElementById('usuarios-modal').innerHTML = ``;
    $.ajax({
        url: 'php/usuarios.php',
        method: 'get',
        data: '',
        dataType: 'json',
        success: function (resUsuarios) {
            this.usuarios = resUsuarios;
            for (let i = 0; i < this.usuarios.length; i++) {
                document.getElementById('usuarios-modal').innerHTML +=
                    `
                <option value="${this.usuarios[i].codigoUsuario}">${this.usuarios[i].nombreUsuario}</option>
                `
            }
        },
        error: function (xhr, textStatus, errorMessage) {
            console.log("ERROR " + errorMessage + " " + textStatus + " " + xhr.responseText);
        }
    });
}

function verPlaylist(codigoPlaylist) {
    //console.log('Ver playlist con codigo: ' + codigoPlaylist);
    document.getElementById('vista-playlist').innerHTML = ``;

    $.ajax({
        url: 'php/usuarios.php',
        method: 'get',
        data: '',
        dataType: 'json',
        success: function (resUsuarios) {
            this.usuarios = resUsuarios;
            usuarioSeleccionado = (document.getElementById('usuarios-modal').value) - 1;
            document.getElementById('vista-playlist').innerHTML += `
                <section class="container-fluid">
                    <div class="row">
                        <div class="col-4 text-center">
                            <h5>Playlist 1</h5>
                            <div class="cover-image">
                                <i class="fas fa-music fa-9x"></i>
                            </div>
                            <button class="btn btn-success" type="button">Play</button>
                        </div>
                        <div class="col-8" id="songs-playlist-${codigoPlaylist}">
                        </div>
                    </div>
                </section>
            `;
            //document.getElementById(`songs-playlist-${codigoPlaylist}`).innerHTML = ``;

            for (let h = 0; h < this.usuarios[usuarioSeleccionado].playlists[codigoPlaylist].canciones.length; h++) {
                document.getElementById(`songs-playlist-${codigoPlaylist}`).innerHTML += `
                <div class="row song-item">
                    <div class="col-1"><i class="fas fa-play"></i></div>
                    <div class="col-10">
                        <div class="song-title">${this.usuarios[usuarioSeleccionado].playlists[codigoPlaylist].canciones[h].nombreCancion}</div>
                        <div class="song-description"${this.usuarios[usuarioSeleccionado].playlists[codigoPlaylist].canciones[h].artista} - ${this.usuarios[usuarioSeleccionado].playlists[codigoPlaylist].canciones[h].album}</div>
                    </div>
                    <div class="col-1">
                        <span>3:34</span>
                    </div>
                </div>
        `
            }

            /*
            for (let i = 0; i < this.artistas.length; i++) {
                if (this.artistas[i].nombreArtista == this.usuarios[usuarioSeleccionado].playlists[codigoPlaylist].canciones[i].artista) {
                    for (let j = 0; j < this.artistas[i].albumes.length; j++) {
                        if (this.artistas[i].albumes[j].nombreAlbum == this.usuarios[usuarioSeleccionado].playlists[codigoPlaylist].canciones[i].album) {
                            for (let k = 0; k < this.artistas[i].albumes[j].canciones.length; k++) {
                                if (this.artistas[i].albumes[j].canciones[k].nombreCancion == this.usuarios[usuarioSeleccionado].playlists[codigoPlaylist].canciones[i].nombreCancion) {
                                    this.artistas[i].albumes[j].canciones[k].duration;
                                }
                            }
                        }
                    }
                }
            }*/


        },
        error: function (xhr, textStatus, errorMessage) {
            console.log("ERROR " + errorMessage + " " + textStatus + " " + xhr.responseText);
        }
    });
    $("#vista-playlist").show();
    $("#vista-artista").hide();
}

function mostrarInfoUsuario() {
    $.ajax({
        url: 'php/usuarios.php',
        method: 'get',
        data: '',
        dataType: 'json',
        success: function (resUsuarios) {
            this.usuarios = resUsuarios;
            usuarioSeleccionado = (document.getElementById('usuarios-modal').value) - 1;
            document.getElementById('playlists-modal').innerHTML = ``;
            document.getElementById('playlists-usuario-seleccionado').innerHTML = ``;
            for (let j = 0; j < this.usuarios[usuarioSeleccionado].playlists.length; j++) {
                document.getElementById('playlists-modal').innerHTML +=
                    `
                <option value="${j}">${this.usuarios[usuarioSeleccionado].playlists[j].tituloPlaylist}</option>
                `;
                document.getElementById('playlists-usuario-seleccionado').innerHTML +=
                    `
                <li class="nav-item">
                    <div class="nav-link" onclick="verPlaylist(${j})"><i class="fas fa-play"></i>${this.usuarios[usuarioSeleccionado].playlists[j].tituloPlaylist}</div>
                </li>
                `;
            }

        },
        error: function (xhr, textStatus, errorMessage) {
            console.log("ERROR " + errorMessage + " " + textStatus + " " + xhr.responseText);
        }
    });
    $('#playlists-modal').modal('hide');
}

function agregarCancion(posArtista, posAlbum, posCancion) {
    //console.log("Agregar cancion " + codigoCancion);
    $.ajax({
        url: 'php/artistas.php',
        method: 'get',
        data: '',
        dataType: 'json',
        success: function (resArtistas) {
            this.artistas = resArtistas;
            cancionAgregar = {
                'nombreCancion': `${this.artistas[posArtista].albumes[posAlbum].canciones[posCancion].nombreCancion}`,
                'artista': `${this.artistas[posArtista].nombreArtista}`,
                'album': `${this.artistas[posArtista].albumes[posAlbum].nombreAlbum}`
            };
        },
        error: function (xhr, textStatus, errorMessage) {
            console.log("ERROR " + errorMessage + " " + textStatus + " " + xhr.responseText);
        }
    });

    $("#modal-playlists").modal('show');
}

function guardarEnPlaylist() {
    $.ajax({
        url: 'php/usuarios.php',
        method: 'get',
        data: '',
        dataType: 'json',
        success: function (resUsuarios) {
            this.usuarios = resUsuarios;
            usuarioSeleccionado = (document.getElementById('usuarios-modal').value) - 1;
            let playlistSeleccionada = document.getElementById('playlists-modal').value;
            this.usuarios[usuarioSeleccionado].playlists[playlistSeleccionada].canciones.push(cancionAgregar);
            usuarioActualizar = {
                'codigoUsuario': `${this.usuarios[usuarioSeleccionado].codigoUsuario}`,
                'nombreUsuario': `${this.usuarios[usuarioSeleccionado].nombreUsuario}`,
                'playlists': this.usuarios[usuarioSeleccionado].playlists
            };

            $.ajax({
                url: `php/usuarios.php?id=${usuarioSeleccionado}`,
                method: 'put',
                data: JSON.stringify(usuarioActualizar),
                dataType: 'json',
                success: function (usuariosActualizados) {
                    console.log(usuariosActualizados);
                },
                error: function (xhr, textStatus, errorMessage) {
                    console.log("ERROR " + errorMessage + " " + textStatus + " " + xhr.responseText);
                }
            });
            
        },
        error: function (xhr, textStatus, errorMessage) {
            console.log("ERROR " + errorMessage + " " + textStatus + " " + xhr.responseText);
        }
    });
    
    mostrarInfoUsuario();
    $('#modal-playlists').modal('hide');
    
}
