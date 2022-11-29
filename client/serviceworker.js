const CACHE_NAME = "cache-1";
const urlsToCache = ["index.html", "offline.html"];

const self = this;

self.addEventListener("insatll", (event) => {
  event.waitUntill(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});
