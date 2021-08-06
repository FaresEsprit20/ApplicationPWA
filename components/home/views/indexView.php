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
         include "components/navbar/views/navbarView.php";
        ?>
       

<main>

    <!-- Start Landing Section -->

<section class="landing" id="#landing">
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
    <div class="col-12 col-sm-12 col-lg-12">

      
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
            <tbody>
              
              <tr>
                <th scope="row">1</th>
                <td>Eau minérale</td>
                <td>Bouteille 1.5</td>
                <td>27/07/2021</td>
                <td>9:00</td>
                <td>100</td>
              </tr>
    
              <tr>
                <th scope="row">2</th>
                <td>Eau minérale</td>
                <td>Bouteille 1.5</td>
                <td>27/07/2021</td>
                <td>10:00</td>
                <td>150</td>
              </tr>
    
              <tr>
                <th scope="row">3</th>
                <td>Eau minérale</td>
                <td>Bouteille 1.5</td>
                <td>27/07/2021</td>
                <td>11:00</td>
                <td>200</td>
              </tr>
    
              <tr>
                <th scope="row">4</th>
                <td>Cahier</td>
                <td>78</td>
                <td>27/07/2021</td>
                <td>10:00</td>
                <td>200</td>
              </tr>
            </tbody>
          </table>
      
        </div>

    </div>
  </div>
  </div>
 
</section>

<!-- End Products -->


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
         include "components/footer/views/footerView.php";
        ?>


    <!-- Popper.js first, then Bootstrap JS -->
    <script type="text/javascript" src="node_modules/jquery/dist/jquery.min.js"></script>
    <script type="text/javascript" src="scss/popperjs/popper.min.js"></script>
    <script src="assets/js/main-script.js" ></script> 
    <script src="assets/js/main.js" ></script>    
   </body>

</html>
