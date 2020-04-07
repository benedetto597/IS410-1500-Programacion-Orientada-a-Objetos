<?php

    class Usuario{
        private $codigoUsuario;
        private $nombreUsuario;
        private $playlist;

        public function __construct($codigoUsuario,$nombreUsuario,$playlist){
            $this->codigoUsuario = $codigoUsuario;
            $this->nombreUsuario = $nombreUsuario;
            $this->playlist = $playlist;
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
 
        public function getNombreUsuario()
        {
                return $this->getNombreUsuario;
        }

        public function setNombreUsuario($getNombreUsuario)
        {
                $this->getNombreUsuario = $getNombreUsuario;

                return $this;
        }
 
        public function getPlaylist()
        {
                return $this->playlist;
        }

        public function setPlaylist($playlist)
        {
                $this->playlist = $playlist;

                return $this;
        }
 
        public function __toString(){
            return $this->codigoUsuario ." ".$this->nombreUsuario.
            " ".$this->playlist;
        }

        public static function obtenerUsuarios(){
                $usuarios = file_get_contents("../data/usuarios.json");
                echo $usuarios;                
        }

        public function agregarEnPlaylist($cancion, $artista, $album){
                
        }
    }

?>