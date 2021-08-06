const staticDevCoffee = "dev-coffee-site-v1";
const assets = [
  "/",
  "/index.php",
  "/css/style.css",
  "/assets/js/main.js",
  "/assets/js/main-script.js",
  "/assets/images/hello-icon-128.png",
  "/assets/images/hello-icon-144.png",
  "/assets/images/hello-icon-152.png",
  "/assets/images/hello-icon-192.png",
  "/assets/images/hello-icon-256.png",
  "/assets/images/hello-icon-512.png",
  "/assets/images/logo/logo.jpeg",
  "/assets/images/intro/intro-sm.jpg"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
 });

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})