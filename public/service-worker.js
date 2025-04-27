self.addEventListener('install', event => {
  console.log('[Service Worker] Instalado');
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  console.log('[Service Worker] Ativado');
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .catch(() => {
        console.warn('[Service Worker] Falha na busca de rede:', event.request.url);
        return caches.match('offline.html');
      })
  );
}); 