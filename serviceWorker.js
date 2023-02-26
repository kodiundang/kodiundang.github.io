const staticDevCoffee = "pwa";
const assets = [
  "/",
  "/index.html",
  "/public/src/css/style.css",
  "/public/src/js/script.js",
  "/public/favicon/android-icon-192x192.png",
  "/public/favicon/apple-icon-72x72.png",
  "/public/favicon/apple-icon-144x144.png",
  "/public/favicon/favicon-16x16.png",
  "/public/favicon/favicon-32x32.png",
  "/public/favicon/favicon-96x96.png",
  "/public/favicon/favicon-120x120.png",
  "/public/favicon/favicon-512x512.png",
  "/public/static/heriswn.jpg",
];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then((cache) => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    })
  );
});