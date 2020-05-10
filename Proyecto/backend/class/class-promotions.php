<?php
class Promocion{
    private $nombrePromocion;
    private $sucursalPromocion;
    private $precioRealPromocion;
    private $descuentoPromocion;
    private $precioDescPromocion;
    private $inicioPromocion;
    private $finPromocion;

    public function __construct(
        $nombrePromocion,
        $sucursalPromocion,
        $precioRealPromocion,
        $descuentoPromocion,
        $precioDescPromocion,
        $inicioPromocion,
        $finPromocion){

        $this->nombrePromocion = $nombrePromocion;
        $this->sucursalPromocion = $sucursalPromocion;
        $this->precioRealPromocion = $precioRealPromocion;
        $this->descuentoPromocion = $descuentoPromocion;
        $this->precioDescPromocion = $precioDescPromocion;
        $this->inicioPromocion = $inicioPromocion;
        $this->finPromocion = $finPromocion;
    }

    public function getNombrePromocion()
    {
        return $this->nombrePromocion;
    }

    public function setNombrePromocion($nombrePromocion)
    {
        $this->nombrePromocion = $nombrePromocion;

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

    public function getDescuentoPromocion()
    {
        return $this->descuentoPromocion;
    }

    public function setDescuentoPromocion($descuentoPromocion)
    {
        $this->descuentoPromocion = $descuentoPromocion;

        return $this;
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

    public function getPrecioRealPromocion()
    {
        return $this->precioRealPromocion;
    }

    public function setPrecioRealPromocion($precioRealPromocion)
    {
        $this->precioRealPromocion = $precioRealPromocion;

        return $this;
    }

    public function obtenerPromocion($db, $id){
        $respuesta = $db->getReference('promociones')
            ->getChild($id)
            ->getValue();

        echo json_encode($respuesta);
    }

    public function obtenerPromociones($db){
        $respuesta = $db->getReference('promociones')
            ->getSnapshot()
            ->getValue();

        echo json_encode($respuesta);
    }

    public function crearPromocion($db){
        $promocion = $this->obtenerInfo();
        $respuesta = $db->getReference('promociones')
            ->push($promocion);
               
        if ($respuesta->getKey() != null)
            return '{"mensaje":"Registro almacenado","key":"'.$respuesta->getKey().'"}';
        else 
            return '{"mensaje":"Error al guardar el registro"}';
    }

    public function actualizarPromocion($db, $id){
        $respuesta = $db->getReference('promociones')
            ->getChild($id)
            ->set($this->obtenerInfo());
            
        if ($respuesta->getKey() != null)
            return '{"mensaje":"Registro actualizado","key":"'.$respuesta->getKey().'"}';
        else 
            return '{"mensaje":"Error al actualizar el registro"}';
    }

    public function eliminarPromocion($db, $id){
        $db->getReference('promociones')
            ->getChild($id)
            ->remove();
        echo '{"mensaje":"Se eliminó el elemento '.$id.'"}';
    }

    public function obtenerInfo(){
        $datos['nombreProducto'] = $this->nombrePromocion;
        $datos['sucursalPromocion'] = $this->sucursalPromocion;
        $datos['precioRealPromocion'] = $this->precioRealPromocion;
        $datos['descuentoPromocion'] = $this->descuentoPromocion;
        $datos['precioDescPromocion'] = $this->precioDescPromocion;
        $datos['inicioPromocion'] = $this->inicioPromocion;
        $datos['finPromocion'] = $this->finPromocion;
        return $datos;
    }

}
?>