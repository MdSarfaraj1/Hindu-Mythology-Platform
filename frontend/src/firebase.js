import { initializeApp } from 'firebase/app';
import { getMessaging } from "firebase/messaging";
const firebaseConfig = {
    apiKey: "AIzaSyArmHwlm9_TXAUPZ26HGcR9hXFEPA9ujc4",
    authDomain: "knowledge-2059c.firebaseapp.com",
    projectId: "knowledge-2059c",
    storageBucket: "knowledge-2059c.firebasestorage.app",
    messagingSenderId: "654795357369",
    appId: "1:654795357369:web:8fb18ae32e06f8d00a6f68",
    measurementId: "G-YQTBK6J47E"
  };
  export const app = initializeApp(firebaseConfig);
  export const messaging = getMessaging(app);