<?php
header('Access-Control-Allow-Origin: *');


// Connect to server

class Database{
 
        // specify your own database credentials
        private $host = "localhost";
        private $db_name = "stage";
        private $username = "root";
        private $password = "";
        public $conn;
     
        // get the database connection
        public function getConnection(){
     
            $this->conn = null;
     
            try{
                $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
                $this->conn->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
                http_response_code(200);
            }catch(PDOException $exception){
                echo "Connection error: " . $exception->getMessage();
                http_response_code(500);
            }
     
            return $this->conn;
        }
    }

    