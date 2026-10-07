self.addEventListener('install', e=>self.skipWaiting());
self.addEventListener('activate', e=>{e.clients.claim();caches.keys().then(k=>k.forEach(c=>caches.delete(c)))});
self.addEventListener('fetch', e=>e.respondWith(fetch(e.request,{cache:'no-store'})));
