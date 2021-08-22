<?php
header('Access-Control-Allow-Origin: *');

class Months {

    //atributes
    public $month;
    public $qte;


    //constructor
public function __construct($month,$qte) {
    $this->month = $month;
    $this->qte = $qte;

 }



    
}