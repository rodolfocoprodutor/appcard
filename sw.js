self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("static").then(cache => {
      return cache.addAll(["./", "./src/main.css", "./assets/logo192.png", "./assets/logo512.png"])
    })
  )
});

self.addEventListener("fetch", e => {
  console.log('Intercepting fetch request for: ${e.request.url}');
});