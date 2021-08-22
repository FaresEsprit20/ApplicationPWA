const staticDevCoffee = 'stage-cache-appss';
const assets = [
  '/',
  'http://127.0.0.1/Stage/',
  'index.html',
  'http://127.0.0.1/Stage/manifest.json',
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
  'scss/popperjs/popper.min.js',
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

// When there's an incoming fetch request, try and respond with a precached resource, otherwise fall back to the network
self.addEventListener('fetch', (event) => {
  console.log('Fetch intercepted for:', event.request.url);
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request);
    }),
  );
});

