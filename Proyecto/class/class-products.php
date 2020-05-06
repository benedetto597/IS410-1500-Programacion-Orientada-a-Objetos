<?php

class Producto{
    private $nombreProducto;
    private $imgProducto;
    private $precioProducto;
    private $categoriaProducto;
    private $descripcionProducto;
    private $sucursalProducto;

    public function __construct(
    $nombreProducto,
    $imgProducto,
    $precioProducto,
    $categoriaProducto,
    $descripcionProducto,
    $sucursalProducto){

        $this->nombreProducto = $nombreProducto;
        $this->imgProducto = $imgProducto;
        $this->precioProducto = $precioProducto;
        $this->categoriaProducto = $categoriaProducto;
        $this->descripcionProducto = $descripcionProducto;
        $this->sucursalProducto = $sucursalProducto;
    }
 
    public function getNombreProducto()
    {
        return $this->nombreProducto;
    }
 
    public function setNombreProducto($nombreProducto)
    {
        $this->nombreProducto = $nombreProducto;

        return $this;
    }

    public function getImgProducto()
    {
        return $this->imgProducto;
    }
 
    public function setImgProducto($imgProducto)
    {
        $this->imgProducto = $imgProducto;

        return $this;
    }

    public function getPrecioProducto()
    {
        return $this->precioProducto;
    }

    public function setPrecioProducto($precioProducto)
    {
        $this->precioProducto = $precioProducto;

        return $this;
    }

    public function getCategoriaProducto()
    {
        return $this->categoriaProducto;
    }
 
    public function setCategoriaProducto($categoriaProducto)
    {
        $this->categoriaProducto = $categoriaProducto;

        return $this;
    }

    public function getDescripcionProducto()
    {
        return $this->descripcionProducto;
    }
 
    public function setDescripcionProducto($descripcionProducto)
    {
        $this->descripcionProducto = $descripcionProducto;

        return $this;
    }

    public function getSucursalProducto()
    {
        return $this->sucursalProducto;
    }

    public function setSucursalProducto($sucursalProducto)
    {
        $this->sucursalProducto = $sucursalProducto;

        return $this;
    }

    public function obtenerProducto(){
        
    }

    public function obtenerProductos(){
        
    }

    public function guardarProducto(){

    }

    public function actualizarProducto(){

    }

    public function eliminarProducto(){

    }
}
?>