// firebase-messaging-sw.js - This should be at the root of your public folder
importScripts("https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js");

const firebaseConfig = {
  apiKey: "AIzaSyArmHwlm9_TXAUPZ26HGcR9hXFEPA9ujc4",
  authDomain: "knowledge-2059c.firebaseapp.com",
  projectId: "knowledge-2059c",
  storageBucket: "knowledge-2059c.firebasestorage.app",
  messagingSenderId: "654795357369",
  appId: "1:654795357369:web:8fb18ae32e06f8d00a6f68",
  measurementId: "G-YQTBK6J47E"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("[firebase-messaging-sw.js] Received background message ", payload);
  
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "./logo.jpeg",
    data: {
      url: payload.data?.url || "/",
    },
  };
  
  self.registration.showNotification(notificationTitle, notificationOptions);
});

self.addEventListener("notificationclick", (event) => {
  console.log("Notification clicked:", event.notification);
  
  const url = event.notification.data?.url || "/";
  console.log("URL in notification data:", url);
  
  event.notification.close(); // Close the notification
  
  event.waitUntil(
    clients.matchAll({ type: "window", includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        if (client.url === url && "focus" in client) {
          return client.focus();
        }
      }
      
      if (clients.openWindow) {
        return clients.openWindow(url);
      }
    })
  );
});