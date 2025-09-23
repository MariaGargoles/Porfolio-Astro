/**
 * Service Worker para optimización de caché
 */

const CACHE_NAME = "portfolio-cache-v1";
const urlsToCache = [
  "/",
  "/src/styles/accessibility.css",
  "/src/styles/mobile-accessibility.css",
  "/favicon.svg",
  "/assets/IP.jpg",
  "/assets/cre1.JPG",
  "/assets/cre2.JPG",
  "/assets/cre3.JPG",
  "/assets/proy1.JPG",
  "/assets/proy2.JPG",
  "/assets/proy3.JPG",
  "/assets/dycle1.png",
  "/assets/dycle2.png",
  "/assets/dycle3.png",
  "/assets/focusflow1.png",
  "/assets/focusflow2.jpg",
  "/assets/focusflow3.png",
];

// Instalar Service Worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Cache abierto");
      return cache.addAll(urlsToCache);
    })
  );
});

// Activar Service Worker
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log("Eliminando cache antiguo:", cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Interceptar solicitudes
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Devolver desde caché si está disponible
      if (response) {
        return response;
      }

      // Clonar la solicitud
      const fetchRequest = event.request.clone();

      return fetch(fetchRequest).then((response) => {
        // Verificar si recibimos una respuesta válida
        if (!response || response.status !== 200 || response.type !== "basic") {
          return response;
        }

        // Clonar la respuesta
        const responseToCache = response.clone();

        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });

        return response;
      });
    })
  );
});
