<?php

    class Usuario{
        private $codigoUsuario;
        private $nombre;
        private $correo;
        private $contraseña;
        private $imagen;
        private $siguiendo;

        public function __construct($codigoUsuario,$nombre,$correo,$contraseña,$imagen,$siguiendo){
            $this->codigoUsuario = $codigoUsuario;
            $this->nombre = $nombre;
            $this->correo = $correo;
            $this->contraseña = $contraseña;
            $this->imagen = $imagen;
            $this->siguiendo = $siguiendo;
        }
 
        public function getCodigoUsuario()
        {
                return $this->codigoUsuario;
        }

        public function setCodigoUsuario($codigoUsuario)
        {
                $this->codigoUsuario = $codigoUsuario;

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
 
        public function getCorreo()
        {
                return $this->correo;
        }

        public function setCorreo($correo)
        {
                $this->correo = $correo;

                return $this;
        }
 
        public function getContraseña()
        {
                return $this->contraseña;
        }

        public function setContraseña($contraseña)
        {
                $this->contraseña = $contraseña;

                return $this;
        }
 
        public function getImagen()
        {
                return $this->imagen;
        }

        public function setImagen($imagen)
        {
                $this->imagen = $imagen;

                return $this;
        }
 
        public function getSiguiendo()
        {
                return $this->siguiendo;
        }

        public function setSiguiendo($siguiendo)
        {
                $this->siguiendo = $siguiendo;

                return $this;
        }
 
        public function __toString(){
            return $this->codigoUsuario ." ".$this->nombre.
            " ".$this->correo . " " . $this->contraseña . " " . $this->imagen . " " . $this->siguiendo;
        }

        public static function obtenerUsuarios(){
                $usuarios = file_get_contents("../data/usuarios.json");
                echo $usuarios;                
        }

    }

?>