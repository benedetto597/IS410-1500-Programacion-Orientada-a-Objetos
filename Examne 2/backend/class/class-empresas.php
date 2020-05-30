<?php

    class Empresa{
        private $idEmpresa;
        private $nombreEmpresa;
        private $imagen;
        private $productos;

        public function __construct($idEmpresa,$nombreEmpresa,$imagen,$productos){
            $this->idEmpresa = $idEmpresa;
            $this->nombreEmpresa = $nombreEmpresa;
            $this->imagen = $imagen;
            $this->productos = $productos;
        }
 
        public function getIdEmpresa()
        {
                return $this->idEmpresa;
        }

        public function setIdEmpresa($idEmpresa)
        {
                $this->idEmpresa = $idEmpresa;

                return $this;
        }
 
        public function getNombre()
        {
                return $this->nombreEmpresa;
        }

        public function setNombre($nombreEmpresa)
        {
                $this->nombreEmpresa = $nombreEmpresa;

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
 
        public function getProductos()
        {
                return $this->productos;
        }

        public function setProductos($productos)
        {
                $this->productos = $productos;

                return $this;
        }

 
        public function __toString(){
            return $this->idEmpresa ." ".$this->nombreEmpresa.
            " ".$this->imagen . " " . $this->productos;
        }

        public static function obtenerEmpresas(){
                $empresas = file_get_contents("../data/empresas.json");
                echo $empresas;                
        }

    }

?>