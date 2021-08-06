<?php



//calling model file
require("models/ProductionModel.php");


//treatements ...

$model = new ProductionModel();


//calling view file
require "views/indexView.php";