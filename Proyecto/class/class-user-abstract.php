<?php 

abstract class Usuario{
    private $nombre;
    private $apellido;
    private $nombreUsuario;
    private $genero;
    private $pais;
    private $moneda;
    private $correo;
    private $contraseña;

    public function __construct($nombre,$apellido,$nombreUsuario,$genero,$pais,$moneda,$correo,$contraseña){
        $this->nombre = $nombre;
        $this->apellido = $apellido;
        $this->$nombreUsuario = $$nombreUsuario;
        $this->genero = $genero;
        $this->pais = $pais;
        $this->moneda = $moneda;
        $this->correo = $correo;
        $this->contraseña = $contraseña;
    }
 
    public function getNombre()
    {
        return $this->nombre;
    }
 
    public function setNombre($nombre)
    {
        $this->nombre = $nombre;

        return $this;
    }
 
    public function getApellido()
    {
        return $this->apellido;
    }
 
    public function setApellido($apellido)
    {
        $this->apellido = $apellido;

        return $this;
    }

    public function getNombreUsuario()
    {
        return $this->nombreUsuario;
    }
 
    public function setNombreUsuario($nombreUsuario)
    {
        $this->nombreUsuario = $nombreUsuario;

        return $this;
    }
 
    public function getGenero()
    {
        return $this->genero;
    }
 
    public function setGenero($genero)
    {
        $this->genero = $genero;

        return $this;
    }
 
    public function getPais()
    {
        return $this->pais;
    }
 
    public function setPais($pais)
    {
        $this->pais = $pais;

        return $this;
    }
 
    public function getMoneda()
    {
        return $this->moneda;
    }
 
    public function setMoneda($moneda)
    {
        $this->moneda = $moneda;

        return $this;
    }
 
    public function getCorreo()
    {
        return $this->correo;
    }
 
    public function setCorreo($correo)
    {
        $this->correo = $correo;

        return $this;
    }
 
    public function getContraseña()
    {
        return $this->contraseña;
    }

    public function setContraseña($contraseña)
    {
        $this->contraseña = $contraseña;

        return $this;
    }

}
    
?>