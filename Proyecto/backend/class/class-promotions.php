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
    // NO FUNCIONA
    public function obtenerPromocion($db, $id){
        $resultado = $db->getReference('productos')
            ->orderByChild('nombreProducto')
            ->equalTo($this->nombrePromocion)
            ->getSnapshot()
            ->getValue();

        echo json_encode($resultado['promocionesProducto'][$id]);
    }

    public function obtenerPromociones($db,$name){
        $resultado = $db->getReference('productos')
            ->orderByChild('nombreProducto')
            ->equalTo($name)   
            ->getSnapshot()
            ->getValue();
        
        echo json_encode($resultado);
    }

    public function crearPromocion($db){
        $promocion = $this->obtenerInfo();

        $producto = $db->getReference('productos')
            ->orderByChild('nombreProducto')
            ->equalTo($this->nombrePromocion)
            ->getSnapshot()
            ->getValue();
            
        $key = array_key_first($producto);

        $resultado = $db->getReference('productos')
            ->getChild($key)
            ->getValue();
        
        $resultado['promocionesProducto'][] = $promocion;
        $respuesta = $db->getReference('productos/'.$key.'/promocionesProducto')
            ->set($resultado['promocionesProducto']);

        if ($key != null)
            return '{"mensaje":"Registro de promocion creado","key":"'.$key.'"}';
        else 
            return '{"mensaje":"Error al crear el registro"}';

    }

    public function crearComentario($db){
        $datos = $this->obtenerInfo();
        $comentario['nombreProducto'] = $datos['nombrePromocion'];
        $comentario['usuario'] = $datos['precioRealPromocion'];
        $comentario['comentario'] = $datos['precioDescPromocion'];
        $producto = $db->getReference('productos')
            ->orderByChild('nombreProducto')
            ->equalTo($this->nombrePromocion)
            ->getSnapshot()
            ->getValue();
            
        $key = array_key_first($producto);

        $resultado = $db->getReference('productos')
            ->getChild($key)
            ->getValue();
        
        $resultado['comentariosProducto'][] = $comentario;
        $respuesta = $db->getReference('productos/'.$key.'/comentariosProducto')
            ->set($resultado['comentariosProducto']);

        if ($key != null)
            return '{"mensaje":"Registro de comentario creado","key":"'.$key.'"}';
        else 
            return '{"mensaje":"Error al crear el registro"}';

    }

    public function crearFavorito($db){
        $datos = $this->obtenerInfo();
        $comentario['nombreProducto'] = $datos['nombrePromocion'];
        $comentario['usuario'] = $datos['precioRealPromocion'];
        $producto = $db->getReference('productos')
            ->orderByChild('nombreProducto')
            ->equalTo($this->nombrePromocion)
            ->getSnapshot()
            ->getValue();
            
        $key = array_key_first($producto);

        $resultado = $db->getReference('productos')
            ->getChild($key)
            ->getValue();
        
        $resultado['favoritosProducto'][] = $comentario;
        $respuesta = $db->getReference('productos/'.$key.'/favoritosProducto')
            ->set($resultado['favoritosProducto']);

        if ($key != null)
            return '{"mensaje":"Registro de comentario creado","key":"'.$key.'"}';
        else 
            return '{"mensaje":"Error al crear el registro"}';

    }

    public function crearCarrito($db){
        $datos = $this->obtenerInfo();
        $comentario['nombreProducto'] = $datos['nombrePromocion'];
        $comentario['usuario'] = $datos['precioRealPromocion'];
        $producto = $db->getReference('productos')
            ->orderByChild('nombreProducto')
            ->equalTo($this->nombrePromocion)
            ->getSnapshot()
            ->getValue();
            
        $key = array_key_first($producto);

        $resultado = $db->getReference('productos')
            ->getChild($key)
            ->getValue();
        
        $resultado['carritoProducto'][] = $comentario;
        $respuesta = $db->getReference('productos/'.$key.'/carritoProducto')
            ->set($resultado['carritoProducto']);

        if ($key != null)
            return '{"mensaje":"Registro de comentario creado","key":"'.$key.'"}';
        else 
            return '{"mensaje":"Error al crear el registro"}';

    }

    public function crearCalificacion($db){
        $datos = $this->obtenerInfo();
        $comentario['nombreProducto'] = $datos['nombrePromocion'];
        $comentario['usuario'] = $datos['precioRealPromocion'];
        $comentario['calificacion'] = $datos['precioDescPromocion'];
        $producto = $db->getReference('productos')
            ->orderByChild('nombreProducto')
            ->equalTo($this->nombrePromocion)
            ->getSnapshot()
            ->getValue();
            
        $key = array_key_first($producto);

        $resultado = $db->getReference('productos')
            ->getChild($key)
            ->getValue();
        
        $resultado['calificacionesProducto'][] = $comentario;
        $respuesta = $db->getReference('productos/'.$key.'/calificacionesProducto')
            ->set($resultado['calificacionesProducto']);

        if ($key != null)
            return '{"mensaje":"Registro de comentario creado","key":"'.$key.'"}';
        else 
            return '{"mensaje":"Error al crear el registro"}';

    }

    public function crearCompra($db){
        $datos = $this->obtenerInfo();
        $comentario['nombreProducto'] = $datos['nombrePromocion'];
        $comentario['usuario'] = $datos['precioRealPromocion'];
        $comentario['cantidad'] = $datos['precioDescPromocion'];
        $producto = $db->getReference('productos')
            ->orderByChild('nombreProducto')
            ->equalTo($this->nombrePromocion)
            ->getSnapshot()
            ->getValue();
            
        $key = array_key_first($producto);

        $resultado = $db->getReference('productos')
            ->getChild($key)
            ->getValue();
        
        $resultado['compradoProducto'][] = $comentario;
        $respuesta = $db->getReference('productos/'.$key.'/compradoProducto')
            ->set($resultado['compradoProducto']);

        if ($key != null)
            return '{"mensaje":"Registro de comentario creado","key":"'.$key.'"}';
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
        if($respuesta != null){
            if($respuesta["token"]==$_COOKIE["token"]){
                return true;
            }else{
                return false;
            }        
        }
    }

}
?>