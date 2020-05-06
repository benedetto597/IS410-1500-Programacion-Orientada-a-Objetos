<?php 
include_once('class/class-user-abstract.php');

class Empresa extends Usuario{
    private $nombreEmpresa;
    private $dirEmpresa;
    private $latEmpresa;
    private $longEmpresa;
    private $planEmpresa;
    private $logoEmpresa;
    private $bannerEmpresa;
    private $codigoEmpresa;
    private $fbEmpresa;
    private $igEmpresa;
    private $whaEmpresa;
    private $twitEmpresa;

    public function __construct($nombre,$apellido,$genero,$pais,$moneda,$correo,$contraseña,$nombreEmpresa,$dirEmpresa,$latEmpresa,$longEmpresa,$planEmpresa,$logoEmpresa,$bannerEmpresa,$codigoEmpresa,$fbEmpresa,$igEmpresa,$whaEmpresa,$twitEmpresa){
        parent::__construct($nombre,$apellido,$genero,$pais,$moneda,$correo,$contraseña);
        $this->nombreEmpresa = $nombreEmpresa;
        $this->dirEmpresa = $dirEmpresa;
        $this->latEmpresa = $latEmpresa;
        $this->longEmpresa = $longEmpresa;
        $this->planEmpresa = $planEmpresa;
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
 
    public function getPlanEmpresa()
    {
        return $this->planEmpresa;
    }
 
    public function setPlanEmpresa($planEmpresa)
    {
        $this->planEmpresa = $planEmpresa;

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
    
    public function obtenerEmpresa(){
        
    }

    public function obtenerEmpresas(){
        
    }

    public function guardarEmpresa(){

    }

    public function actualizarEmpresa(){

    }

    public function eliminarEmpresa(){

    }
}
    
?>