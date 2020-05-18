<?php
$nombre = $_FILES['imagen']['name'];
$guradado = $_FILES['imagen']['tmp_name'];
if(!file_exists('img/company-logo')){
    mkdir('img/company-logo');
    if(file_exists('img/company-logo')){
        if(move_uploaded_file($guradado, 'img/company-logo/'.$nombre)){
            echo 'img/company-logo/'.$nombre;
            return 'img/company-logo/'.$nombre;
        }else{
            return "nada";
        }
    }else{
        if(move_uploaded_file($guradado, 'img/company-logo/'.$nombre)){
            echo 'img/company-logo/'.$nombre;
            return 'img/company-logo/'.$nombre;
        }else{
            return "nada";
        }
    }
}
?>