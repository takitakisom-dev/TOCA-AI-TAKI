self.addEventListener('push', function(event) {
  let data = {title: "🔔 NOVO PEDIDO!", body: "Alguém pediu uma música!"};
  try{ if(event.data){ data = event.data.json(); } }catch(e){}
  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: "https://cdn-icons-png.flaticon.com/512/138/138817.png",
      badge: "https://cdn-icons-png.flaticon.com/512/138/138817.png",
      vibrate: [500,150,500,150,800],
      requireInteraction: true
    })
  );
});
self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('/TOCA-AI-TAKI/?dono=TAKI123')
  );
});
