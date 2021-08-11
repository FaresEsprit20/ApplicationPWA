<?php


class ProductionByMonth {

    //atributes
    public $id;
    public $ligne;
    public $produit;
    public $date;
    public $heure;
    public $qte;
    public $month;
    public $year;


    //constructor
public function __construct($id,$ligne,$produit,$date,$heure,$qte, $month, $year) {
    $this->id = $id;
    $this->ligne = $ligne;
    $this->produit = $produit;
    $this->date = $date;
    $this->heure = $heure;
    $this->qte = $qte;
    $this->month = $month;
    $this->year = $year;
 }



    
}