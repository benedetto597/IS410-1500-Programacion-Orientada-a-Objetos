<?php

    class Usuario{
        private $idUsuario;
        private $nombre;
        private $apellido;
        private $ordenes;

        public function __construct($idUsuario,$nombre,$apellido,$ordenes){
            $this->idUsuario = $idUsuario;
            $this->nombre = $nombre;
            $this->apellido = $apellido;
            $this->ordenes = $ordenes;
        }
 
        public function getIdUsuario()
        {
                return $this->idUsuario;
        }

        public function setIdUsuario($idUsuario)
        {
                $this->idUsuario = $idUsuario;

                return $this;
        }
 
        public function getNombre()
        {
                return $this->nombre;
        }

        public function setNombre($nombre)
        {
                $this->nombre = $nombre;

                return $this;
        }
 
        public function getApellido()
        {
                return $this->apellido;
        }

        public function setApellido($apellido)
        {
                $this->apellido = $apellido;

                return $this;
        }
 
        public function getOrdenes()
        {
                return $this->ordenes;
        }

        public function setOrdenes($ordenes)
        {
                $this->ordenes = $ordenes;

                return $this;
        }

 
        public function __toString(){
            return $this->idUsuario ." ".$this->nombre.
            " ".$this->apellido . " " . $this->ordenes;
        }

        public static function obtenerUsuarios(){
                $usuarios = file_get_contents("../data/usuarios.json");
                echo $usuarios;                
        }

        public function actualizarUsuario($indice){
                $contenidoArchivo = file_get_contents("../data/usuarios.json");
                $usuarios = json_decode($contenidoArchivo, true);
                $usuario = array(
                        'idUsuario'=> $this->idUsuario,
                        'nombre'=> $this->nombre,
                        'apellido'=> $this->apellido,
                        'ordenes'=> $this->ordenes,
                );
                $usuarios[$indice] = $usuario;
                $archivo = fopen('../data/usuarios.json', 'w');
                fwrite($archivo, json_encode($usuarios));
                fclose($archivo);     
                echo json_encode($usuarios);
        }

    }

?>