<?php


class ProductionByMonth {

    //atributes
    public $id;
    public $ligne;
    public $produit;
    public $date;
    public $heure;
    public $qte;
    public $months = array();
    public $year;


    //constructor
public function __construct($id,$ligne,$produit,$date,$heure,$qte, $months, $year) {
    $this->id = $id;
    $this->ligne = $ligne;
    $this->produit = $produit;
    $this->date = $date;
    $this->heure = $heure;
    $this->qte = $qte;
    $this->months = $months;
    $this->year = $year;
 }



    
}