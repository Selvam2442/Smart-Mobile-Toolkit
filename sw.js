const CACHE_NAME = 'toolkit-cache-v1';

// List all the files you want saved for offline use
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/logo.svg',
  '/studio.html',
  '/cutter.html',
  '/vid2aud.html',
  '/trimmer.html',
  '/compressor.html',
  '/format.html',
  '/pdf.html',
  '/qr.html',
  '/cipher.html',
  '/expense.html',
  '/countdown.html',
  '/audio.html',
  '/timer.html',
  '/notes.html',
  '/converter.html',
  '/number.html',
  '/repeater.html',
  '/reverser.html',
  '/about.html',
  '/contact.html'
];

// 1. INSTALL STAGE: Cache all local files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// 2. FETCH STAGE: Serve from cache, then fall back to network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return the cached file if found
        if (response) {
          return response;
        }
        
        // If not in cache, fetch from the internet and dynamically cache it (for CDNs like FontAwesome/Bootstrap)
        return fetch(event.request).then(
          function(networkResponse) {
            if(!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
              return networkResponse;
            }
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then(function(cache) {
              cache.put(event.request, responseToCache);
            });
            return networkResponse;
          }
        );
      }).catch(() => {
        // Fallback for when offline and file isn't cached at all
        console.log("Offline and resource not found in cache.");
      })
  );
});

// 3. ACTIVATE STAGE: Clean up old caches if we update the version
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
