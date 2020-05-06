<?php 
include_once('class/class-user-abstract.php');

class Administrador extends Usuario{
    private $codigoAdmin;
    private $fotoAdmin;
    private $coverAdmin;

    public function __construct($nombre,$apellido,$nombreUsuario,$genero,$pais,$moneda,$correo,$contraseña,$codigoAdmin,$fotoAdmin,$coverAdmin){
        parent::__construct($nombre,$apellido,$nombreUsuario,$genero,$pais,$moneda,$correo,$contraseña);
        $this->codigoAdmin = $codigoAdmin;
        $this->fotoAdmin = $fotoAdmin;
        $this->coverAdmin = $coverAdmin;
    }
    
    public function getFotoAdmin()
    {
        return $this->fotoAdmin;
    }

    public function setFotoAdmin($fotoAdmin)
    {
        $this->fotoAdmin = $fotoAdmin;

        return $this;
    }

    public function getCodigoAdmin()
    {
        return $this->codigoAdmin;
    }

    public function setCodigoAdmin($codigoAdmin)
    {
        $this->codigoAdmin = $codigoAdmin;

        return $this;
    }

    public function getCoverAdmin()
    {
        return $this->coverAdmin;
    }

    public function setCoverAdmin($coverAdmin)
    {
        $this->coverAdmin = $coverAdmin;

        return $this;
    }
    
    public function obtenerAdmin(){
        
    }

    public function guardarAdmin(){

    }

    public function actualizarAdmin(){

    }

    public function eliminarAdmin(){

    }

}