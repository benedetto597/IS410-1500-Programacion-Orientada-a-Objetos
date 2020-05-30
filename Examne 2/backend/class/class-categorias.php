<?php

    class Categoria{
        private $nombre;
        private $descripcion;
        private $color;
        private $icono;
        private $empresas;

        public function __construct($nombre,$descripcion,$color,$icono,$empresas){
            $this->nombre = $nombre;
            $this->descripcion = $descripcion;
            $this->color = $color;
            $this->icono = $icono;
            $this->empresas = $empresas;
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
 
        public function getDescripcion()
        {
                return $this->descripcion;
        }

        public function setDescripcion($descripcion)
        {
                $this->descripcion = $descripcion;

                return $this;
        }
 
        public function getColor()
        {
                return $this->color;
        }

        public function setColor($color)
        {
                $this->color = $color;

                return $this;
        }
 
        public function getIcono()
        {
                return $this->icono;
        }

        public function setIcono($icono)
        {
                $this->icono = $icono;

                return $this;
        }

        public function getEmpresas()
        {
                return $this->empresas;
        }

        public function setEmpresas($empresas)
        {
                $this->empresas = $empresas;

                return $this;
        }

 
        public function __toString(){
            return $this->nombre ." ".$this->descripcion.
            " ".$this->color . " " . $this->icono . " " . $this->empresas ;
        }

        public static function obtenerCategorias(){
                $usuarios = file_get_contents("../data/categorias.json");
                echo $usuarios;                
        }

        public function crearCategoria(){
                $contenidoArchivo = file_get_contents("../data/categorias.json");
                $categorias = json_decode($contenidoArchivo, true);
                $categoria = array(
                        'nombreCategoria'=> $this->nombre,
                        'descripcion'=> $this->descripcion,
                        'color'=> $this->color,
                        'icono'=> $this->icono,
                        'empresas'=> $this->empresas
                );
                $categorias[] = $categoria;
                $archivo = fopen('../data/categorias.json', 'w');
                fwrite($archivo, json_encode($categorias));
                fclose($archivo);     
                echo json_encode($categorias);
        }

    }

?>