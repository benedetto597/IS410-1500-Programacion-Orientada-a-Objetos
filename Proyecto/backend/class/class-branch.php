<?php 

class Sucursal{
    private $nombreSucursal;
    private $dirSucursal;
    private $latSucursal;
    private $longSucursal;
    private $productosSucursal;

    public function __construct($nombreSucursal,$dirSucursal,$latSucursal,$longSucursal,$productosSucursal){
        $this->nombreSucursal = $nombreSucursal;
        $this->dirSucursal = $dirSucursal;
        $this->latSucursal = $latSucursal;
        $this->longSucursal = $longSucursal;
        $this->productosSucursal = $productosSucursal;
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

    public function getProductosSucursal()
    {
        return $this->productosSucursal;
    }

    public function setProductosSucursal($productosSucursal)
    {
        $this->productosSucursal = $productosSucursal;

        return $this;
    }
    
    public static function obtenerSucursal($db, $id){
        //El id es el número de posicion en la lista 
        $respuesta = $db->getReference('empresas/'.$_COOKIE['key'].'/sucursalesEmpresa')
            ->getChild($id)
            ->getValue();

        echo json_encode($respuesta);
    }

    public static function obtenerSucursales($db){
        $respuesta = $db->getReference('empresas/'.$_COOKIE['key'].'/sucursalesEmpresa')
            ->getSnapshot()
            ->getValue();

        echo json_encode($respuesta);
    }

    public function crearSucursal($db){
        $sucursal = $this->obtenerInfo();
        $resultado = $db->getReference('empresas')
            ->getChild($_COOKIE['key'])
            ->getValue();
        
        $resultado['sucursalesEmpresa'][] = $sucursal;
        $respuesta = $db->getReference('empresas/'.$_COOKIE['key'].'/sucursalesEmpresa')
            ->set($resultado['sucursalesEmpresa']);

        return '{"mensaje":"Registro almacenado"}';
    }

    public function actualizarSucursal($db, $id){
        $sucursal = $this->obtenerInfo();
        $resultado = $db->getReference('empresas')
            ->getChild($_COOKIE['key'])
            ->getValue();
        
        $resultado['sucursalesEmpresa'][$id] = $sucursal;
        $respuesta = $db->getReference('empresas/'.$_COOKIE['key'].'/sucursalesEmpresa')
            ->set($resultado['sucursalesEmpresa']);

        return '{"mensaje":"Registro actualizado","key":"'.$_COOKIE['key'].'"}';
    }

    public static function eliminarSucursal($db, $id){
        $respuesta = $db->getReference('empresas/'.$_COOKIE['key'].'/sucursalesEmpresa')
            ->getChild($id)
            ->remove();
        echo '{"mensaje":"Se eliminó el elemento '.$id.'"}';
    }

    public function obtenerInfo(){
        $datos['nombreSucursal'] = $this->nombreSucursal;
        $datos['direccionSucursal'] = $this->dirSucursal;
        $datos['latitudSucursal'] = $this->latSucursal;
        $datos['longitudSucursal'] = $this->longSucursal;
        $datos['productosSucursal'] = $this->productosSucursal;
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