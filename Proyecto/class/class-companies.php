<?php 
include_once('class-user-abstract.php');

class Empresa extends Usuario{
    private $dirEmpresa;
    private $latEmpresa;
    private $longEmpresa;
    private $sucursalesEmpresa;
    private $logoEmpresa;
    private $bannerEmpresa;
    private $codigoEmpresa;
    private $fbEmpresa;
    private $igEmpresa;
    private $whaEmpresa;
    private $twitEmpresa;

    public function __construct($nombre,$apellido,$nombreUsuario,$genero,$pais,$moneda,$correo,$contraseña,$dirEmpresa,$latEmpresa,$longEmpresa,$sucursalesEmpresa,$logoEmpresa,$bannerEmpresa,$codigoEmpresa,$fbEmpresa,$igEmpresa,$whaEmpresa,$twitEmpresa){
        parent::__construct($nombre,$apellido,$nombreUsuario,$genero,$pais,$moneda,$correo,$contraseña);
        $this->dirEmpresa = $dirEmpresa;
        $this->latEmpresa = $latEmpresa;
        $this->longEmpresa = $longEmpresa;
        $this->sucursalesEmpresa = $sucursalesEmpresa;
        $this->logoEmpresa = $logoEmpresa;
        $this->bannerEmpresa = $bannerEmpresa;
        $this->codigoEmpresa = $codigoEmpresa;
        $this->fbEmpresa = $fbEmpresa;
        $this->igEmpresa = $igEmpresa;
        $this->whaEmpresa = $whaEmpresa;
        $this->twitEmpresa = $twitEmpresa;
    }
 
    public function getNombreEmpresa()
    {
        return $this->nombreEmpresa;
    }
 
    public function setNombreEmpresa($nombreEmpresa)
    {
        $this->nombreEmpresa = $nombreEmpresa;

        return $this;
    }
 
    public function getDirEmpresa()
    {
        return $this->dirEmpresa;
    }
 
    public function setDirEmpresa($dirEmpresa)
    {
        $this->dirEmpresa = $dirEmpresa;

        return $this;
    }
 
    public function getLatEmpresa()
    {
        return $this->latEmpresa;
    }
 
    public function setLatEmpresa($latEmpresa)
    {
        $this->latEmpresa = $latEmpresa;

        return $this;
    }
 
    public function getLongEmpresa()
    {
        return $this->longEmpresa;
    }
 
    public function setLongEmpresa($longEmpresa)
    {
        $this->longEmpresa = $longEmpresa;

        return $this;
    }
 
    public function getSucursalesEmpresa()
    {
        return $this->sucursalesEmpresa;
    }
 
    public function setSucursalesEmpresa($sucursalesEmpresa)
    {
        $this->sucursalesEmpresa = $sucursalesEmpresa;

        return $this;
    }
 
    public function getLogoEmpresa()
    {
        return $this->logoEmpresa;
    }
 
    public function setLogoEmpresa($logoEmpresa)
    {
        $this->logoEmpresa = $logoEmpresa;

        return $this;
    }
 
    public function getBannerEmpresa()
    {
        return $this->bannerEmpresa;
    }
 
    public function setBannerEmpresa($bannerEmpresa)
    {
        $this->bannerEmpresa = $bannerEmpresa;

        return $this;
    }
 
    public function getTwitEmpresa()
    {
        return $this->twitEmpresa;
    }
 
    public function setTwitEmpresa($twitEmpresa)
    {
        $this->twitEmpresa = $twitEmpresa;

        return $this;
    }

    public function getWhaEmpresa()
    {
        return $this->whaEmpresa;
    }
 
    public function setWhaEmpresa($whaEmpresa)
    {
        $this->whaEmpresa = $whaEmpresa;

        return $this;
    }

    public function getIgEmpresa()
    {
        return $this->igEmpresa;
    }
 
    public function setIgEmpresa($igEmpresa)
    {
        $this->igEmpresa = $igEmpresa;

        return $this;
    }

    public function getFbEmpresa()
    {
        return $this->fbEmpresa;
    }
 
    public function setFbEmpresa($fbEmpresa)
    {
        $this->fbEmpresa = $fbEmpresa;

        return $this;
    }

    public function getCodigoEmpresa()
    {
        return $this->codigoEmpresa;
    }
 
    public function setCodigoEmpresa($codigoEmpresa)
    {
        $this->codigoEmpresa = $codigoEmpresa;

        return $this;
    }
    
    public function obtenerEmpresa($db, $id){
        $respuesta = $db->getReference('empresas')
            ->getChild($id)
            ->getValue();

        echo json_encode($respuesta);
    }

    public function obtenerEmpresas($db){
        $respuesta = $db->getReference('empresas')
            ->getSnapshot()
            ->getValue();

        echo json_encode($respuesta);
    }
    
    public function crearEmpresa($db){
        $empresa = $this->obtenerInfo();
        $respuesta = $db->getReference('empresas')
            ->push($empresa);
               
        if ($respuesta->getKey() != null)
            return '{"mensaje":"Registro almacenado","key":"'.$respuesta->getKey().'"}';
        else 
            return '{"mensaje":"Error al guardar el registro"}';
    }
    
    public function actualizarEmpresa($db, $id){
        $respuesta = $db->getReference('empresas')
            ->getChild($id)
            ->set($this->obtenerInfo());
            
        if ($respuesta->getKey() != null)
            return '{"mensaje":"Registro actualizado","key":"'.$respuesta->getKey().'"}';
        else 
            return '{"mensaje":"Error al actualizar el registro"}';

    }

    public function eliminarEmpresa($db, $id){
        $db->getReference('empresas')
            ->getChild($id)
            ->remove();
        echo '{"mensaje":"Se eliminó el elemento '.$id.'"}';
    }

    public function obtenerInfo(){
        $datos['nombre'] = parent::getNombre();
        $datos['apellido'] = parent::getApellido();
        $datos['nombreEmpresa'] = parent::getNombreUsuario();
        $datos['plan'] = parent::getGenero();
        $datos['pais'] = parent::getPais();
        $datos['moneda'] = parent::getMoneda();
        $datos['correo'] = parent::getCorreo();
        $datos['contraseña'] = parent::getContraseña();
        $datos['dirEmpresa'] = $this->dirEmpresa;
        $datos['latEmpresa'] = $this->latEmpresa;
        $datos['longEmpresa'] = $this->longEmpresa;
        $datos['sucursalesEmpresa'] = $this->sucursalesEmpresa;
        $datos['logoEmpresa'] = $this->logoEmpresa;
        $datos['bannerEmpresa'] = $this->bannerEmpresa;
        $datos['codigoEmpresa'] = $this->codigoEmpresa;
        $datos['fbEmpresa'] = $this->fbEmpresa;
        $datos['igEmpresa'] = $this->igEmpresa;
        $datos['whaEmpresa'] = $this->whaEmpresa;
        $datos['twitEmpresa'] = $this->twitEmpresa;
        return $datos;
    }
}
    
?>