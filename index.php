<?php



//calling model file
require("models/ProductionModel.php");


//treatements ...

$model = new ProductionModel();


//calling view file

require "components/home/views/indexView.php";

