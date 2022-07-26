self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("static").then(cache => {
      return cache.addAll(["./", "./src/main.css", "./src/reset.css", "./src/global.css", "./assets/logo192.png", "./assets/logo512.png", "./assets/profile-aircard.png"])
    })
  )
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e,request);
    })
  );
});