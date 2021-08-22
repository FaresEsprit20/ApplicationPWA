<?php
header('Access-Control-Allow-Origin: *');

class ProductionByMonth {

    //atributes
    public $ligne;
    public $products;



    //constructor
public function __construct($ligne,$products) {
    $this->ligne = $ligne;
    $this->products = $products;
 }



    
}