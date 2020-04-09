<?php

    class Historia{
        private $codigoHistoria;
        private $usuario;
        private $imagenUsuario;
        private $historias;

        public function __construct($codigoHistoria,$usuario,$imagenUsuario,$historias){
            $this->codigoHistoria = $codigoHistoria;
            $this->usuario = $usuario;
            $this->imagenUsuario = $imagenUsuario;
            $this->historias = $historias;
        }
 
        public function getCodigoHistoria()
        {
                return $this->codigoHistoria;
        }

        public function setCodigoHistoria($codigoHistoria)
        {
                $this->codigoHistoria = $codigoHistoria;

                return $this;
        }
 
        public function getUsuario()
        {
                return $this->usuario;
        }

        public function setUsuario($usuario)
        {
                $this->usuario = $usuario;

                return $this;
        }
 
        public function getImagenUsuario()
        {
                return $this->imagenUsuario;
        }

        public function setImagenUsuario($imagenUsuario)
        {
                $this->imagenUsuario = $imagenUsuario;

                return $this;
        }
 
        public function getHistoria()
        {
                return $this->historias;
        }

        public function setHistoria($historias)
        {
                $this->historias = $historias;

                return $this;
        }
 
        public function __toString(){
            return $this->codigoHistoria ." ".$this->usuario.
            " ".$this->imagenUsuario . " " . $this->historia ;
        }

        public static function obtenerHistorias(){
                $historias = file_get_contents("../data/historias.json");
                echo $historias;                
        }

    }

?>