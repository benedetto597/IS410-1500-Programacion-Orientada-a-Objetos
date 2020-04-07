function verHistoria(codigoUsuario, codigoHistoria){
    console.log(`Ver historia ${codigoHistoria} del usuario ${codigoUsuario} `);
    $('#ver-historia').modal('show');
}

function comentar(codigoPost){
    console.log(`Comentar el post ${codigoPost} con el comentario ${$("#comentario-post-"+codigoPost).val()}`);
}