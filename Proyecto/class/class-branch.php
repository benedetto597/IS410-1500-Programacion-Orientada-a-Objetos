<?php 

class Sucursal{
    private $nombreSucursal;
    private $dirSucursal;
    private $latSucursal;
    private $longSucursal;

    public function __construct($nombreSucursal,$dirSucursal,$latSucursal,$longSucursal){
        $this->nombreSucursal = $nombreSucursal;
        $this->dirSucursal = $dirSucursal;
        $this->latSucursal = $latSucursal;
        $this->longSucursal = $longSucursal;
    }
 
    public function getNombreSucursal()
    {
        return $this->nombreSucursal;
    }
 
    public function setNombreSucursal($nombreSucursal)
    {
        $this->nombreSucursal = $nombreSucursal;

        return $this;
    }
 
    public function getDirSucursal()
    {
        return $this->dirSucursal;
    }
 
    public function setDirSucursal($dirSucursal)
    {
        $this->dirSucursal = $dirSucursal;

        return $this;
    }
 
    public function getLatSucursal()
    {
        return $this->latSucursal;
    }
 
    public function setLatSucursal($latSucursal)
    {
        $this->latSucursal = $latSucursal;

        return $this;
    }
 
    public function getLongSucursal()
    {
        return $this->longSucursal;
    }
 
    public function setLongSucursal($longSucursal)
    {
        $this->longSucursal = $longSucursal;

        return $this;
    }
    
    public function obtenerSucursal(){
        
    }

    public function obtenerSucursales(){
        
    }

    public function guardarSucursal(){

    }

    public function actualizarSucursal(){

    }

    public function eliminarSucursal(){

    }
}
    
?>