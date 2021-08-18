const staticDevCoffee = "stage-cache-app";
const assets = [
  "/",
  "/index.php",
  "css/style.css",
  "css/style.css.map",
  "assets/js/ajax.js",
  "assets/js/main-script.js",
  "assets/js/main.js",
  "assets/js/piechart.js",
  "assets/images/Into/into.jpg",
  "assets/images/Into/intro-sm.jpg",
  "assets/images/logo/logo.jpeg",
  "assets/images/hello-icon-128.png",
  "assets/images/hello-icon-144.png",
  "assets/images/hello-icon-152.png",
  "assets/images/hello-icon-192.png",
  "assets/images/hello-icon-256.png",
  "assets/images/hello-icon-512.png",
  "node_modules/jquery/dist/jquery.min.js",
  "scss/popperjs/popper.min.js",
  "node_modules/bootstrap/dist/js/bootstrap.js",
  "node_modules/chart.js/dist/chart.js",
  "components/navbar/views/navbarView.php",
  "components/navbar/controller/navbarController.php",
  "components/home/views/indexView.php",
  "components/footer/views/footerView.php",
  "components/footer/controller/footerController.php",

 
];
  
self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      console.log('[Service Worker] Mise en cache globale: app shell et contenu');
      cache.addAll(assets);
    })
  )
});

self.addEventListener('fetch', (e) => {
  console.log('[Service Worker] Ressource récupérée '+e.request.url);
});

