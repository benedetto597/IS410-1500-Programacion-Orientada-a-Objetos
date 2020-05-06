<?php

require_once('class-products.php');

class Promocion extends Producto{
    private $descuentoPromocion;
    private $precioDescPromocion;
    private $inicioPromocion;
    private $finPromocion;

    public function __construct(
        $descuentoPromocion,
        $precioDescPromocion,
        $inicioPromocion,
        $finPromocion){

        $this->descuentoPromocion = $descuentoPromocion;
        $this->precioDescPromocion = $precioDescPromocion;
        $this->inicioPromocion = $inicioPromocion;
        $this->finPromocion = $finPromocion;
    }
 
    public function getFinPromocion()
    {
        return $this->finPromocion;
    }
 
    public function setFinPromocion($finPromocion)
    {
        $this->finPromocion = $finPromocion;

        return $this;
    }

    public function getprecioDescPromocion()
    {
        return $this->precioDescPromocion;
    }
 
    public function setprecioDescPromocion($precioDescPromocion)
    {
        $this->precioDescPromocion = $precioDescPromocion;

        return $this;
    }

    public function getInicioPromocion()
    {
        return $this->inicioPromocion;
    }
 
    public function setInicioPromocion($inicioPromocion)
    {
        $this->inicioPromocion = $inicioPromocion;

        return $this;
    }

    public function getSucursalPromocion()
    {
        return $this->sucursalPromocion;
    }

    public function setSucursalPromocion($sucursalPromocion)
    {
        $this->sucursalPromocion = $sucursalPromocion;

        return $this;
    }

    public function obtenerPromocion(){
        
    }

    public function obtenerPromociones(){
        
    }

    public function guardarPromocion(){

    }

    public function actualizarPromocion(){

    }

    public function eliminarPromocion(){

    }
}
?>