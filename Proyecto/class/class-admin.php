<?php 
include_once('class-user-abstract.php');

class Administrador extends Usuario{
    private $codigoAdmin;
    private $fotoAdmin;
    private $coverAdmin;

    public function __construct($nombre,$apellido,$nombreUsuario,$genero,$pais,$moneda,$correo,$contraseña,$codigoAdmin,$fotoAdmin,$coverAdmin){
        parent::__construct($nombre,$apellido,$nombreUsuario,$genero,$pais,$moneda,$correo,$contraseña);
        $this->codigoAdmin = $codigoAdmin;
        $this->fotoAdmin = $fotoAdmin;
        $this->coverAdmin = $coverAdmin;
    }
    
    public function getFotoAdmin()
    {
        return $this->fotoAdmin;
    }

    public function setFotoAdmin($fotoAdmin)
    {
        $this->fotoAdmin = $fotoAdmin;

        return $this;
    }

    public function getCodigoAdmin()
    {
        return $this->codigoAdmin;
    }

    public function setCodigoAdmin($codigoAdmin)
    {
        $this->codigoAdmin = $codigoAdmin;

        return $this;
    }

    public function getCoverAdmin()
    {
        return $this->coverAdmin;
    }

    public function setCoverAdmin($coverAdmin)
    {
        $this->coverAdmin = $coverAdmin;

        return $this;
    }
    
    public function obtenerAdmin($db, $id){
        $respuesta = $db->getReference('administradores')
            ->getChild($id)
            ->getValue();

        echo json_encode($respuesta);
    }

    public function obtenerAdmins($db){
        $respuesta = $db->getReference('administradores')
            ->getSnapshot()
            ->getValue();

        echo json_encode($respuesta);
    }

    public function crearAdmin($db){
        $administrador = $this->obtenerInfo();
        $respuesta = $db->getReference('administradores')
            ->push($administrador);
               
        if ($respuesta->getKey() != null)
            return '{"mensaje":"Registro almacenado","key":"'.$respuesta->getKey().'"}';
        else 
            return '{"mensaje":"Error al guardar el registro"}';
    }

    public function actualizarAdmin($db, $id){
        $respuesta = $db->getReference('administradores')
            ->getChild($id)
            ->set($this->obtenerInfo());
            
        if ($respuesta->getKey() != null)
            return '{"mensaje":"Registro actualizado","key":"'.$respuesta->getKey().'"}';
        else 
            return '{"mensaje":"Error al actualizar el registro"}';
    }

    public function eliminarAdmin($db, $id){
        $db->getReference('administradores')
            ->getChild($id)
            ->remove();
        echo '{"mensaje":"Se eliminó el elemento '.$id.'"}';
    }

    public function obtenerInfo(){
        $datos['nombre'] = parent::getNombre();
        $datos['apellido'] = parent::getApellido();
        $datos['nombreUsuario'] = parent::getNombreUsuario();
        $datos['genero'] = parent::getGenero();
        $datos['pais'] = parent::getPais();
        $datos['moneda'] = parent::getMoneda();
        $datos['correo'] = parent::getCorreo();
        $datos['contraseña'] = parent::getContraseña();
        $datos['codigoAdmin'] = $this->codigoAdmin;
        $datos['fotoAdmin'] = $this->fotoAdmin;
        $datos['coverAdmin'] = $this->coverAdmin;
        return $datos;
    }
}
?>