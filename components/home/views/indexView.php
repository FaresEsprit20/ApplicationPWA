<!DOCTYPE html>

<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Internship Project</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
        <link href="https://fonts.googleapis.com/css?family=Merriweather:400,900,900i" rel="stylesheet">
        <link rel="stylesheet" href="css/style.css">
        <link rel="manifest" href="manifest.json">
        <link rel="icon" href="favicon.ico" type="image/x-icon" />  
        <link rel="apple-touch-icon" href="assets/images/hello-icon-152.png">   
        <meta name="theme-color" content="white"/>  
        <meta name="apple-mobile-web-app-capable" content="yes">  
        <meta name="apple-mobile-web-app-status-bar-style" content="black"> 
        <meta name="apple-mobile-web-app-title" content="Hello World"> 
        <meta name="msapplication-TileImage" content="assets/images/hello-icon-144.png">  
        <meta name="msapplication-TileColor" content="#FFFFFF">
    </head>
    
    <body>
        <a id="button-scroll-top"></a>
        <?php 
         require "components/navbar/controller/navbarController.php";
        ?>
       

<main>

    <!-- Start Landing Section -->

<section class="landing" id="landing">
  <div class="intro-text">
      <h1>
          Hello There
      </h1>
      <p>
          Feel free to use our app
      </p>
  </div>
</section>

<!-- End Landing Section -->


<!-- Start Features Section -->


  <!-- Start Features Section -->

  <section class="features" id="features">
    <div class="container-fluid">
      <h2 class="special-heading">Fonctionnalités</h2>
        <p>Ce que nous offrons</p>
        <div class="row">
<div class="col-12  col-lg-4 col-sm-12">
  <div class="feat">
    <i class="fa fa-mobile-phone fa-3x"></i>
<h3>Mobile First App</h3>
<p>Application responsive et adaptée aux terminaux mobiles. Cette application offre une meilleure expérience utilisateur et elle est trés facile a utiliser.</p>
</div>
</div>

<div class="col-12  col-lg-4 col-sm-12">
  <div class="feat">
    <i class="fa fa-product-hunt fa-3x"></i>
<h3>Suivre vos produits</h3>
<p>Nous vous proposons un suivi quotidien de vos produits chaque jour et chaque heure avec un simple click!</p>
</div>
</div>

<div class="col-12  col-lg-4 col-sm-12">
  <div class="feat">
    <i class="fa fa-pie-chart fa-3x"></i>
<h3>Statistics Dashboard</h3>
<p>Vous pouvez suivre vos produits grâce à nos superbes chartes graphiques et tableaux de bord que nous vous proposons pour un meilleur service.</p>
</div>
</div>

  </div>
        
    </div>
  </section>

  <!-- End Features Section -->
  

<!-- Start Products -->

<section class="products" id="products">
  <div class="container-fluid">
    <div class="special-heading">Produits</div>
      <p>Suivre la production journalière</p>
  <div class="row">
  <div class="col col-sm col-lg-2">
  </div>
    <div class="col-12 col-sm-12 col-lg-8">

      
      <div class="products-table mt-5 mb-5">
        <div class="table-responsive">

          <table class="table">
            <caption>Liste de production</caption>
            <thead class="table-dark">
              <th scope="col">#</th>
              <th scope="col">Ligne</th>
              <th scope="col">Produit</th>
              <th scope="col">Date</th>
              <th scope="col">Heure</th>
              <th scope="col">Qte</th>
            </thead>
            <tbody id="tbodydaily">
              
            </tbody>
          </table>
      
        </div>

    </div>
  </div>
  <div class="col col-sm col-lg-2">
  </div>
  </div>
 
</section>

<!-- End Products -->



<!-- Start Stats -->

<section class="stats" id="stats">
    <div class="container-fluid">
      <h2 class="special-heading">Statistiques</h2>
        <p>Suivre les statistiques journalières</p>
        <div class="row">
        <div class="col col-lg-2 col-sm-1">
        </div>
        <div class="col-12 col-lg-8 col-sm-10">
          <div class="stat">
       <canvas id="myChartOne"></canvas>
       </div>
      </div>
      <div class="col col-lg-2 col-sm-1">
        </div>
        </div>

        <div class="row">
        <div class="col col-lg-2 col-sm-1">
        </div>
        <div class="col-12 col-lg-8 col-sm-10">
          <div class="stat">
            <select id="selectlignes">

            </select>
       <canvas id="myChartTwo"></canvas>
       </div>
      </div>
      <div class="col col-lg-2 col-sm-1">
        </div>
        </div>




        
        <div class="row">
        <div class="col col-lg-2 col-sm-1">
        </div>
        <div class="col-12 col-lg-8 col-sm-10">
          <div class="stat">
            <select id="selectligness">

            </select>
       <canvas id="myChartThree" height="200px"></canvas>
       </div>
      </div>
      <div class="col col-lg-2 col-sm-1">
        </div>
        </div>


        <div class="row">
        <div class="col col-lg-2 col-sm-1">
        </div>
        <div class="col-12 col-lg-8 col-sm-10">
          <div class="stat">
            <select id="selectlignesbar">

            </select>
       <canvas id="myChartFour" height="250px"></canvas>
       </div>
      </div>
      <div class="col col-lg-2 col-sm-1">
        </div>
        </div>
        
        
    </div>
  </section>

<!-- End Stats -->



  <!-- Start Contact -->
  <section class="contact" id="contact">
    <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-sm-12 col-lg-12">

        <div class="special-heading">Contact</div>
        <p>We are born to create</p>
        <div class="info">
          <p class="label">Feel free to drop us at :  </p>
          <a href="mailto:leonagency@gmail.com" class="link" >leonagency@gmail.com</a>
          <div class="social">
            Find us on social Network
            <i class="fa fa-youtube "></i>
            <i class="fa fa-facebook-f"></i>
            <i class="fa fa-twitter"></i>
          </div>
        </div>

      </div>
    </div>

   
  </section>
  
  <!-- End Contact -->
</div>
</main>
<?php 
         include "components/footer/controller/footerController.php";
        ?>


    <!-- Popper.js first, then Bootstrap JS -->
    <script type="text/javascript" src="node_modules/jquery/dist/jquery.min.js"></script>
    <script type="text/javascript" src="scss/popperjs/popper.min.js"></script>
    <script type="text/javascript" src="node_modules/bootstrap/dist/js/bootstrap.js"></script>
    <script src="assets/js/main-script.js" ></script> 
    <script src="assets/js/main.js" ></script>    
    <script src="assets/js/ajax.js" ></script>
    <script src="node_modules/chart.js/dist/chart.js"></script>
    <script src ="assets/js/piechart.js"></script>
    <script src ="assets/js/radarchart.js"></script>
    
  </body>

</html>
