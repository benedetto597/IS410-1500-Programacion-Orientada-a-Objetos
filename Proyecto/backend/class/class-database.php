<?php

//Código para conectar con el servidor
    require_once(__DIR__.'../../vendor/autoload.php');

    use Kreait\Firebase\Factory;

    class Database{
        private $keyFile = __DIR__.'../../secret/proyecto-poo-271914-946d58aed0ea.json';
        private $URI = 'https://proyecto-poo-271914.firebaseio.com/';
        private $db;

        public function __construct(){
            $firebase = (new Factory)
                ->withServiceAccount($this->keyFile)
                ->withDatabaseUri($this->URI);
    
            $this->db = $firebase->createDatabase();
        }
    
        public function getDB(){
            return $this->db;
        }
    }
    ?>