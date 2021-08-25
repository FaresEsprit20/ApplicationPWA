const staticDevCoffee = 'stage-cache-app';
const dynamicDevCoffee = 'dynamic-stage-cache-app';
const assets = [
  '/',
  'http://127.0.0.1/Stage/',
  'index.html',
  'offline.html',
  'manifest.json',
  'css/style.css',
  'assets/js/ajax.js',
  'assets/js/main-script.js',
  'https://fonts.googleapis.com/css?family=Merriweather:400,900,900i',
  'assets/js/main.js',
  'assets/js/piechart.js',
  'assets/images/Into/into.jpg',
  'assets/images/Into/intro-sm.jpg',
  'assets/images/logo/logo.jpeg',
  'assets/images/hello-icon-128.png',
  'assets/images/hello-icon-144.png',
  'assets/images/hello-icon-152.png',
  'assets/images/hello-icon-192.png',
  'assets/images/hello-icon-256.png',
  'assets/images/hello-icon-512.png',
  'node_modules/jquery/dist/jquery.min.js',
  'node_modules/bootstrap/dist/js/bootstrap.js',
  'node_modules/chart.js/dist/chart.js',


];
  
self.addEventListener('install', (installEvent) => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      console.log('[Service Worker] Mise en cache globale: app shell et contenu');
      cache.addAll(assets);
    })
  )
});

self.addEventListener('activate', (evt) => {
   // console.log(' Service has been activated ! ');
    evt.waitUntil(
      caches.keys().then(keys => {
        //console.log(keys);
        return Promise.all(keys
          .filter(key => key !== staticDevCoffee)
          .map(key => caches.delete(key))
        );
      })
    );
});


self.addEventListener('fetch', function(event) {
  return event.respondWith(
    caches.match(event.request)
    .then(function(response) {
      let requestToCache = event.request.clone();

      return fetch(requestToCache).then().catch(error => {
        // Check if the user is offline first and is trying to navigate to a web page
        if (event.request.method === 'GET' && event.request.headers.get('accept').includes('text/html')) {
          // Return the offline page
          return caches.match('http://127.0.0.1/Stage/offline.html');
        }
      });
    })
  );
});