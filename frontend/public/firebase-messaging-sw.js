importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

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
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});