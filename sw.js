self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => self.clients.claim());
self.addEventListener('push', function(event) {
  const data = event.data ? event.data.text() : 'Novo pedido!';
  event.waitUntil(
    self.registration.showNotification('🔔 PEDE AÍ - NOVO PEDIDO!', {
      body: data,
      icon: 'https://cdn-icons-png.flaticon.com/512/138/138817.png',
      vibrate: [500,150,500,150,800],
      requireInteraction: true
    })
  );
});
self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('/')
  );
});
