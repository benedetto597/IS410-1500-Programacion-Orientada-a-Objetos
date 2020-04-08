<?php

    class Artista{
        private $codigoArtista;
        private $nombreArtista;
        private $album;

        public function __construct($codigoArtista,$nombreArtista,$album){
            $this->codigoArtista = $codigoArtista;
            $this->nombreArtista = $nombreArtista;
            $this->album = $album;
        }
 
        public function getCodigoArtista()
        {
                return $this->codigoArtista;
        }

        public function setCodigoArtista($codigoArtista)
        {
                $this->codigoArtista = $codigoArtista;

                return $this;
        }
 
        public function getnombreArtista()
        {
                return $this->nombreArtista;
        }

        public function setnombreArtista($nombreArtista)
        {
                $this->nombreArtista = $nombreArtista;

                return $this;
        }
 
        public function getalbum()
        {
                return $this->album;
        }

        public function setalbum($album)
        {
                $this->album = $album;

                return $this;
        }
 
        public function __toString(){
            return $this->codigoArtista ." ".$this->nombreArtista.
            " ".$this->album;
        }

        public static function obtenerArtistas(){
                $artistas = file_get_contents("../data/artistas.json");
                echo $artistas;                
        }
    }

?>