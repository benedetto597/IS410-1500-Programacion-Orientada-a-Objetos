<?php 
include_once('class-user-abstract.php');

class Cliente extends Usuario{
    private $fotoCliente;

    public function __construct($nombre,$apellido,$nombreUsuario,$genero,$pais,$moneda,$correo,$contraseña,$fotoCliente){
        parent::__construct($nombre,$apellido,$nombreUsuario,$genero,$pais,$moneda,$correo,$contraseña);
        $this->fotoCliente = $fotoCliente;
    }
 
    public function getFotoCliente()
    {
        return $this->fotoCliente;
    }

    public function setFotoCliente($fotoCliente)
    {
        $this->fotoCliente = $fotoCliente;

        return $this;
    }
    
    public function obtenerCliente($db, $id){
        $respuesta = $db->getReference('clientes')
            ->getChild($id)
            ->getValue();

        echo json_encode($respuesta);
    }

    public function obtenerClientes($db){
        $respuesta = $db->getReference('clientes')
            ->getSnapshot()
            ->getValue();

        echo json_encode($respuesta);
    }

    public function crearCliente($db){
        $cliente = $this->obtenerInfo();
        $cliente['contraseña'] = password_hash(parent::getContraseña(),PASSWORD_DEFAULT);

        $respuesta = $db->getReference('clientes')
            ->push($cliente);
            
        if ($respuesta->getKey() != null)
            return '{"mensaje":"Registro almacenado","key":"'.$respuesta->getKey().'"}';
        else 
            return '{"mensaje":"Error al guardar el registro"}';

    }

    public function actualizarCliente($db, $id){
        $cliente = $this->obtenerInfo();
        $cliente['contraseña'] = parent::getContraseña();
        //Guardar el token para que no se cierre la sesión
        $cliente['token'] = $_COOKIE["token"];
        $respuesta = $db->getReference('clientes')
            ->getChild($id)
            ->set($cliente);
            
        if ($respuesta->getKey() != null)
            return '{"mensaje":"Registro actualizado","key":"'.$respuesta->getKey().'"}';
        else 
            return '{"mensaje":"Error al actualizar el registro"}';
    }

    public function eliminarCliente($db, $id){
        $db->getReference('clientes')
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
        $datos['fotoCliente'] = $this->fotoCliente;
        return $datos;
    }

    public static function login($cliente, $correo, $contraseña, $db){
        $resultado = $db->getReference('clientes')
            ->orderByChild('correo')
            ->equalTo($correo)
            ->getSnapshot()
            ->getValue();

        $key = array_key_first($resultado);
        $valido = password_verify($contraseña, $resultado[$key]['contraseña']);
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
            $db->getReference('clientes/'.$key.'/token')
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
            
        $respuesta = $db->getReference('clientes')
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