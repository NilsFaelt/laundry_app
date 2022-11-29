const CACHE_NAME = "cache-1";
const urlsToCache = ["index.html", "offline.html"];

const self = this;

self.addEventListener("install", (event) => {
  event.waitUntill(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then(() => {
      return fetch(event.request).catch(() => {
        caches.match("offline.html");
        console.log("in fetchm,y dear");
      });
    })
  );
});

self.addEventListener("activate", (event) => {
  const cacheWhiteList = [];
  cacheWhiteList.push(CACHE_NAME);
  console.log(cacheWhiteLIst, "whitelist");
  event.waitUntill(
    caches.keys().then((cacheNames) => {
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhiteList.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
