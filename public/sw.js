// Service Worker for image caching
const CACHE_NAME = 'portfolio-v1';
const IMAGE_CACHE = 'portfolio-images-v1';

// Assets to cache on install
const ASSETS_TO_CACHE = [
  '/',
  '/etimad.webp',
  '/ims.webp',
  '/e-learn.webp',
  '/image-gen.webp',
  '/chat.webp',
  '/streno.webp',
  '/job.webp',
];

// Install event - cache essential assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS_TO_CACHE))
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cacheName) => cacheName !== CACHE_NAME && cacheName !== IMAGE_CACHE)
          .map((cacheName) => caches.delete(cacheName))
      );
    })
  );
  self.clients.claim();
});

// Fetch event - cache images aggressively
self.addEventListener('fetch', (event) => {
  const { request } = event;

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Handle image requests with cache-first strategy
  if (request.destination === 'image' || request.url.includes('.webp')) {
    event.respondWith(
      caches.open(IMAGE_CACHE).then((cache) => {
        return cache.match(request).then((response) => {
          return (
            response ||
            fetch(request).then((response) => {
              // Cache successful image responses
              if (response && response.status === 200) {
                cache.put(request, response.clone());
              }
              return response;
            })
          );
        });
      })
    );
    return;
  }

  // For other requests, use network-first strategy
  event.respondWith(
    fetch(request)
      .then((response) => {
        // Cache successful responses
        if (response && response.status === 200) {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, responseToCache);
          });
        }
        return response;
      })
      .catch(() => {
        // Fall back to cache on network error
        return caches.match(request);
      })
  );
});
