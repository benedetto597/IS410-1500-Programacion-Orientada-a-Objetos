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
    
    public static function obtenerAdmin($db, $id){
        $respuesta = $db->getReference('administradores')
            ->getChild($id)
            ->getValue();

        echo json_encode($respuesta);
    }

    public static function obtenerAdmins($db){
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

    public static function eliminarAdmin($db, $id){
        $db->getReference('administradores')
            ->getChild($id)
            ->remove();
        echo '{"mensaje":"Se eliminó el elemento '.$id.'"}';
    }

    public function obtenerInfo(){
        $datos['nombre'] = parent::getNombre();
        $datos['apellido'] = parent::getApellido();
        $datos['nombreUsuario'] = parent::getUsuario();
        $datos['genero'] = parent::getGenero();
        $datos['pais'] = parent::getPais();
        $datos['moneda'] = parent::getMoneda();
        $datos['correo'] = parent::getCorreo();
        $datos['contraseña'] = password_hash(parent::getContraseña(), PASSWORD_DEFAULT);
        $datos['codigoAdmin'] = password_hash($this->codigoAdmin, PASSWORD_DEFAULT);
        $datos['fotoAdmin'] = $this->fotoAdmin;
        $datos['coverAdmin'] = $this->coverAdmin;
        return $datos;
    }

    public static function login($codigo, $admin, $correo, $contraseña, $db){
        $resultado = $db->getReference('administradores')
            ->orderByChild('correo')
            ->equalTo($correo)
            ->getSnapshot()
            ->getValue();

        $key = array_key_first($resultado);
        $contra = password_verify($contraseña, $resultado[$key]['contraseña']);
        $cod = password_verify($codigo, $resultado[$key]['codigoAdmin']);
        $valido = $contra * $cod;
        $respuesta['valido'] = $valido==1?true:false;
        if($respuesta['valido']){
            $respuesta['key'] = $key;
            $respuesta['correo'] = $resultado[$key]["correo"];
            //Generar cadena de 16 bytes
            $respuesta['token'] = bin2hex(openssl_random_pseudo_bytes(16));
            setcookie('key', $respuesta["key"],time() + (86400 * 30), "/"); 
            setcookie('correo', $respuesta["correo"],time() + (86400 * 30), "/"); 
            setcookie('token', $respuesta["token"],time() + (86400 * 30), "/"); 
            //Guardado de token de autenticación
            $db->getReference('administradores/'.$key.'/token')
                ->set($respuesta["token"]);
            }
            echo json_encode($respuesta);
        }
        
    public static function logout(){
        setcookie('key', $respuesta["key"],time() -3600, "/"); 
        setcookie('correo', $respuesta["correo"],time() -3600, "/"); 
        setcookie('token', $respuesta["token"],time() -3600, "/");
    }

    public static function verificarAutenticacion($db){
        if(!isset($_COOKIE['key']))
            return false;
            
        $respuesta = $db->getReference('administradores')
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