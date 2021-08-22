<?php
header('Access-Control-Allow-Origin: *');
//calling model file
require "../server.php";
require "../../models/ProductionModel.php";


//treatements ...
$database = new Database();
$db = $database->getConnection();

$prod = new ProductionModel($db);
$products = $prod->getProductsStatsByType();


