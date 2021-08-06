<?php

//calling server file
require "server/server.php";

class ProductionModel {

    //atributes
    public $id;
    public $ligne;
    public $produit;
    public $date;
    public $heure;
    public $qte;

    //constructor
    public function __construct() {
     
    }

    //getters and setters
    public function getId()
    {
        return $this->id;
    }
    public function setName($var)
    {
        $this->id = $var;
    }

    public function getLigne()
    {
        return $this->ligne;
    }
    public function setLigne($var)
    {
        $this->ligne = $var;
    }

    public function getProduit()
    {
        return $this->produit;
    }
    public function setProduit($var)
    {
        $this->produit = $var;
    }

    public function getDate()
    {
        return $this->date;
    }
    public function setDate($var)
    {
        $this->date = $var;
    }

    public function getHeure()
    {
        return $this->heure;
    }
    public function setHeure($var)
    {
        $this->heure = $var;
    }

    public function getQte()
    {
        return $this->heure;
    }
    public function setQte($var)
    {
        $this->heure = $var;
    }

    //to string Method
    public function __toString()
    {
        print(" ID  : ".$this->id." Ligne : ".$this->ligne." Produit : ".$this->produit.
        " Date : ".$this->date." Heure : ".$this->heure." Qte : ".$this->qte);
    }
    

    public function getProductionAll() {
      
        $db = getConnection();
      
        $stmt = $db->prepare("SELECT * FROM production");
        $stmt->execute();
    /* Récupération de toutes les lignes d'un jeu de résultats */
    print("Récupération de toutes les lignes d'un jeu de résultats :\n");
   
    $result = $stmt->fetchAll(PDO::FETCH_CLASS,'ProductionModel');
        print_r($result);
        return json_encode($result);
        
    }






}