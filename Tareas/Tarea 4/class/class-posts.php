<?php

    class Post{
        private $codigoPost;
        private $codigoUsuario;
        private $contenidoPost;
        private $imagen;
        private $cantidadLikes;

        public function __construct($codigoPost,$codigoUsuario,$contenidoPost,$imagen,$cantidadLikes){
            $this->codigoPost = $codigoPost;
            $this->codigoUsuario = $codigoUsuario;
            $this->contenidoPost = $contenidoPost;
            $this->imagen = $imagen;
            $this->cantidadLikes = $cantidadLikes;
        }
 
        public function getCodigoPost()
        {
                return $this->codigoPost;
        }

        public function setCodigoPost($codigoPost)
        {
                $this->codigoPost = $codigoPost;

                return $this;
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
 
        public function getContenidoPost()
        {
                return $this->contenidoPost;
        }

        public function setContenidoPost($contenidoPost)
        {
                $this->contenidoPost = $contenidoPost;

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

        public function getCantidadLikes()
        {
                return $this->cantidadLikes;
        }

        public function setCantidadLikes($cantidadLikes)
        {
                $this->cantidadLikes = $cantidadLikes;

                return $this;
        }
 
        public function __toString(){
            return $this->codigoPost ." ".$this->codigoUsuario.
            " ".$this->contenidoPost . " " . $this->imagen . " " . $this->cantidadLikes;
        }

        public static function obtenerPosts(){
                $posts = file_get_contents("../data/posts.json");
                echo $posts;                
        }

        public function agregarPost(){
            $contenidoArchivo = file_get_contents("../data/posts.json");
            $posts = json_decode($contenidoArchivo, true);
            $post = array(
                    'codigoPost'=> $this->codigoPost,
                    'codigoUsuario'=> $this->codigoUsuario,
                    'contenidoPost'=> $this->contenidoPost,
                    'imagen'=> $this->imagen,
                    'cantidadLikes'=> $this->cantidadLikes
            );
            $posts[] = $post;
            $archivo = fopen('../data/posts.json', 'w');
            fwrite($archivo, json_encode($posts));
            fclose($archivo);     
            echo json_encode($posts);
        }

        public function actualizarPost($indice){
            $contenidoArchivo = file_get_contents("../data/posts.json");
            $posts = json_decode($contenidoArchivo, true);
            $post = array(
                    'codigoPost'=> $this->codigoPost,
                    'codigoUsuario'=> $this->codigoUsuario,
                    'contenidoPost'=> $this->contenidoPost,
                    'imagen'=> $this->imagen,
                    'cantidadLikes'=> $this->cantidadLikes
            );
            $posts[$indice] = $post;
            $archivo = fopen('../data/posts.json', 'w');
            fwrite($archivo, json_encode($posts));
            fclose($archivo);     
            echo json_encode($posts);
        }

    }

?>