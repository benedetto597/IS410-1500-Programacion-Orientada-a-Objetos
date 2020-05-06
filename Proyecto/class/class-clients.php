<?php 
include_once('class/class-user-abstract.php');

class Cliente extends Usuario{
    private $fotoCliente;

    public function __construct($nombre,$apellido,$genero,$pais,$moneda,$correo,$contraseña,$fotoCliente){
        parent::__construct($nombre,$apellido,$genero,$pais,$moneda,$correo,$contraseña);
        $this->fotoCliente = $fotoCliente;
    }
 
    public function getFotoCliente()
    {
        return $this->fotoCliente;
    }

    public function setFotoCliente($fotoCliente)
    {
        $this->fotoCliente = $fotoCliente;

        return $this;
    }
    
    public function obtenerCliente(){
        
    }

    public function obtenerClientes(){
        
    }

    public function guardarCliente(){

    }

    public function actualizarCliente(){

    }

    public function eliminarCliente(){

    }

}
    
?>