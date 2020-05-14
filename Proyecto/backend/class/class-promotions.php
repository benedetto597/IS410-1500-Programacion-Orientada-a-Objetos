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
        $resultado = $db->getReference('productos')
            ->orderByChild('nombreProducto')
            ->equalTo($this->nombrePromocion)
            ->getSnapshot()
            ->getValue();

        echo json_encode($resultado['promocionesProducto'][$id]);
    }

    public function obtenerPromociones($db){
        $resultado = $db->getReference('productos')
            ->orderByChild('nombreProducto')
            ->equalTo($this->nombrePromocion)
            ->getSnapshot()
            ->getValue();

        echo json_encode($resultado['promocionesProducto']);
    }

    public function crearPromocion($db){
        //Reparar que producto sea un arreglo y que se muestre el precio real y el de oferta (lado del cliente)
        $promocion = $this->obtenerInfo();

        $producto = $db->getReference('productos')
            ->orderByChild('nombreProducto')
            ->equalTo($this->nombrePromocion)
            ->getSnapshot()
            ->getValue();
            
        $key = array_key_first($producto);
        
        $producto['promocionesProducto'][] = $promocion;
        $respuesta = $db->getReference('productos/'.$key.'/promocionesProducto')
            ->set($producto['promocionesProducto']);

        if ($key != null)
            return '{"mensaje":"Registro creado","key":"'.$key.'"}';
        else 
            return '{"mensaje":"Error al crear el registro"}';

    }

    public function actualizarPromocion($db, $id){
        $promocion = $this->obtenerInfo();

        $producto = $db->getReference('productos')
            ->orderByChild('nombreProducto')
            ->equalTo($this->nombrePromocion)
            ->getSnapshot()
            ->getValue();
        $key = array_key_first($producto);
        $producto['promocionesProducto'][$id] = $promocion;
        $respuesta = $db->getReference('productos/'.$key.'promocionesProducto')
            ->set($producto['promocionesProducto']);

        if ($key != null)
            return '{"mensaje":"Registro actualizado","key":"'.$key.'"}';
        else 
            return '{"mensaje":"Error al actualizar el registro"}';
    }

    public function eliminarPromocion($db, $id){
        $producto = $db->getReference('productos')
            ->orderByChild('nombreProducto')
            ->equalTo($this->nombrePromocion)
            ->getSnapshot()
            ->getValue();
        $key = array_key_first($producto);
        $respuesta = $db->getReference('productos/'.$key.'promocionesProducto')
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

    public static function verificarAutenticacion($db){
        if(!isset($_COOKIE['key']))
            return false;
            
        $respuesta = $db->getReference('empresas')
            ->getChild($_COOKIE['key'])
            ->getValue();

        if($respuesta["token"]==$_COOKIE["token"]){
            return true;
        }else{
            return false;
        }        
    }

}
?>