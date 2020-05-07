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
    
    public function obtenerSucursal($db, $id){
        $respuesta = $db->getReference('sucursales')
            ->getChild($id)
            ->getValue();

        echo json_encode($respuesta);
    }

    public function obtenerSucursales($db){
        $respuesta = $db->getReference('sucursales')
            ->getSnapshot()
            ->getValue();

        echo json_encode($respuesta);
    }

    public function crearSucursal($db){
        $sucursal = $this->obtenerInfo();
        $respuesta = $db->getReference('sucursales')
            ->push($sucursal);
               
        if ($respuesta->getKey() != null)
            return '{"mensaje":"Registro almacenado","key":"'.$respuesta->getKey().'"}';
        else 
            return '{"mensaje":"Error al guardar el registro"}';
    }

    public function actualizarSucursal($db, $id){
        $respuesta = $db->getReference('sucursales')
            ->getChild($id)
            ->set($this->obtenerInfo());
            
        if ($respuesta->getKey() != null)
            return '{"mensaje":"Registro actualizado","key":"'.$respuesta->getKey().'"}';
        else 
            return '{"mensaje":"Error al actualizar el registro"}';
    }

    public function eliminarSucursal($db, $id){
        $db->getReference('sucursales')
            ->getChild($id)
            ->remove();
        echo '{"mensaje":"Se eliminó el elemento '.$id.'"}';
    }

    public function obtenerInfo(){
        $datos['nombreSucursal'] = $this->nombreSucursal;
        $datos['dirSucursall'] = $this->dirSucursal;
        $datos['latSucursal'] = $this->latSucursal;
        $datos['longSucursal'] = $this->longSucursal;
        return $datos;
    }
}
    
?>