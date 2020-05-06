<?php

//Código para conectar con el servidor
    require_once('../vendor/autoload.php');

    use Kreait\Firebase\Factory;

    class Database{
        private $keyFile = '../secret/proyecto-poo-271914-946d58aed0ea.json';
        private $URI = 'https://proyecto-poo-271914.firebaseio.com/';
        private $db;

        public function __construct(){
            $firebase = (new Factory)
                ->withServiceAccount($this->getkeyFile)
                ->withDatabaseUri($this->getURI());
    
            $this->db = $firebase->createDatabase();
        }
    
        public function getDB(){
            return $this->db;
        }
    }

    /* Agregar a la base de datos
    $newPost = $database
        ->getReference('users')
        ->push([
            'firstName' => 'Juan',
            'lastName' => 'Perez'
        ]);
        */
    ?>