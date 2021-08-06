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
<header>
    <nav class="navbar fixed-top navbar-light bg-light" id="navbar">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src="assets/images/logo/logo.jpeg" alt="" width="30" height="24" class="d-inline-block align-text-top">
            PWA
          </a>
          <!--bouton fermée de toggle  btn-close -->
          <button class="navbar-toggler shadow-none" id="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
               
                <a class="nav-link active d-inline-block" aria-current="page" href="#landing">Accueil</a>
                <i class="navbar-fa fa fa-home fa-2x  d-inline-block"></i>
              </li>
              <li class="nav-item">
                
                <a class="nav-link d-inline-block" href="#features">Nos services</a>
                <i class="navbar-fa fa fa-pencil-square fa-2x d-inline-block"></i>
              </li>
              <li class="nav-item">
                <a class="nav-link d-inline-block" href="#products">Produits</a>
                <i class="navbar-fa fa fa-product-hunt fa-2x d-inline-block"></i>
              </li>
              <li class="nav-item">
                <a class="nav-link d-inline-block" href="#stats">Statistiques</a>
                <i class="navbar-fa fa fa-area-chart fa-2x d-inline-block"></i>
              </li>
              <li class="nav-item">
                <a class="nav-link d-inline-block" href="#contact">Contact</a>
                <i class="navbar-fa fa fa-mail-forward fa-2x d-inline-block"></i>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
</header>
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

<footer>
    <div class="bg-light">
        <div class="container">
          <div class="row pt-4 pb-3">
            <div class="col">
              <ul class="list-inline text-center">
                <li class="list-inline-item"><a href="#">À propos</a></li>
                <li class="list-inline-item">&middot;</li>
                <li class="list-inline-item"><a href="#">Vie privée</a></li>
                <li class="list-inline-item">&middot;</li>
                <li class="list-inline-item"><a href="#">Conditions d'utilisations</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
</footer>

    <!-- Popper.js first, then Bootstrap JS -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script> 
    <script src="assets/js/main-script.js" ></script> 
    <script src="assets/js/main.js" ></script>    
   </body>

</html>
