<?php

    class Usuario{
        private $codigoUsuario;
        private $nombreUsuario;
        private $playlists;

        public function __construct($codigoUsuario,$nombreUsuario,$playlists){
            $this->codigoUsuario = $codigoUsuario;
            $this->nombreUsuario = $nombreUsuario;
            $this->playlists = $playlists;
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
                return $this->nombreUsuario;
        }

        public function setNombreUsuario($nombreUsuario)
        {
                $this->nombreUsuario = $nombreUsuario;

                return $this;
        }
 
        public function getPlaylists()
        {
                return $this->playlists;
        }

        public function setPlaylists($playlists)
        {
                $this->playlists = $playlists;

                return $this;
        }
 
        public function __toString(){
            return $this->codigoUsuario ." ".$this->nombreUsuario.
            " ".$this->playlists;
        }

        public static function obtenerUsuarios(){
                $usuarios = file_get_contents("../data/usuarios.json");
                echo $usuarios;                
        }

        public function agregarEnPlaylists($indice){
                $contenidoArchivo = file_get_contents("../data/usuarios.json");
                $usuarios = json_decode($contenidoArchivo, true);
                $usuario = array(
                        'codigoUsuario'=> $this->codigoUsuario,
                        'nombreUsuario'=> $this->nombreUsuario,
                        'playlists'=> $this->playlists
                );
                $usuarios[$indice] = $usuario;
                $archivo = fopen('../data/usuarios.json', 'w');
                fwrite($archivo, json_encode($usuarios));
                fclose($archivo);     
                echo json_encode($usuarios);
        }

    }

?>