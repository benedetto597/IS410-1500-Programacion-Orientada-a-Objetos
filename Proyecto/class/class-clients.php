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
        $respuesta = $db->getReference('administradores')
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
        $respuesta = $db->getReference('clientes')
            ->push($cliente);
               
        if ($respuesta->getKey() != null)
            return '{"mensaje":"Registro almacenado","key":"'.$respuesta->getKey().'"}';
        else 
            return '{"mensaje":"Error al guardar el registro"}';
    }

    public function actualizarCliente($db, $id){
        $respuesta = $db->getReference('clientes')
            ->getChild($id)
            ->set($this->obtenerInfo());
            
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
        $datos['nombreUsuario'] = parent::getNombreUsuario();
        $datos['genero'] = parent::getGenero();
        $datos['pais'] = parent::getPais();
        $datos['moneda'] = parent::getMoneda();
        $datos['correo'] = parent::getCorreo();
        $datos['contraseña'] = parent::getContraseña();
        $datos['fotoCliente'] = $this->fotoCliente;
        return $datos;
    }

}
    
?>