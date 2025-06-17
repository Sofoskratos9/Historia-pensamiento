// Este archivo normalmente es generado por next-pwa
// Pero aquí proporcionamos una versión básica para referencia

const CACHE_NAME = 'odisea-pensamiento-v1';

const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icons/icon.svg',
  // Añadir aquí otros recursos estáticos importantes
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Devuelve la respuesta en caché si está disponible
      if (response) {
        return response;
      }
      
      // Si no está en caché, busca en la red
      return fetch(event.request).then((response) => {
        // Comprueba si recibimos una respuesta válida
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }
        
        // Clona la respuesta porque se consume al leerla
        const responseToCache = response.clone();
        
        // Añade la respuesta a la caché para futuras solicitudes
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });
        
        return response;
      });
    })
  );
});

self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            // Elimina las cachés antiguas
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});