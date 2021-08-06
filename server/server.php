<?php

// Connect to server


       function getConnection() {

        $conn = null;
       
        if (!is_null($conn)) {
            return $conn;
        }
        $conn = false;
        try {
            $conn = new PDO('mysql:host=localhost;dbname=stage', 'root', '');
            $conn->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
        } catch(PDOException $e) { 
            echo 'response_error';
        }
        return $conn;
    }



    