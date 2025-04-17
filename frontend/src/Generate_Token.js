// the file is used to generate firebase token f
 
import { messaging } from "./firebase";
import { getToken } from "firebase/messaging";
import axios from "axios";
export const request_Notification_Permission = async (userID) => {
  try {
    // First check permission
    const permission = await Notification.requestPermission();
    if (permission !== "granted") {
      console.log("Notification permission was not granted.");
      return;
    }
    
    // Wait for the service worker to be ready
    if (!navigator.serviceWorker.controller) {
      // Register service worker if not already registered
      console.log("Registering service worker...");
      await navigator.serviceWorker.register('/firebase-messaging-sw.js');
      
      // Wait for the service worker to be ready
      await new Promise(resolve => {
        if (navigator.serviceWorker.controller) {
          resolve();
        } else {
          navigator.serviceWorker.addEventListener('controllerchange', () => {
            resolve();
          });
        }
      });
    }
    
    // get token from firebase
    const token = await getToken(messaging, {
      vapidKey: "BNW4_8OW2-eYbS2K3so3yC9doxmvVX6kDqf2Hj5UvmYZcO1o-u46mAGfkVQWLEf0O5ZEvL7hRVh_5DkOS1tYdKs",
      serviceWorkerRegistration: await navigator.serviceWorker.ready
    });
    
    if (!token) {
      console.log("No token received");
      return;
    }
    console.log("Token received:", token);
    // Send token to backend
    const response = await axios.post(
      `${import.meta.env.VITE_APP_BACKEND_URL}/Notification/save_firebaseToken`,
      { token, userID },
      { withCredentials: true }
    );
  } catch (err) {
    console.error("Error in notification setup:", err);
    if (err.response?.status === 401) {
      console.log("User not authenticated:", err.response.data.message);
      alert(err.response.data.message);
      window.location.href = "/login";
    } else {
      console.log("Other error occurred:", err?.response?.data?.message || err.message);
    }
  }
};

export const denied_Notification_Permission = async (userID) => {
  try {
    console.log("i am from denied_Notification_Permission ");
    const response = axios.delete(
      `${import.meta.env.VITE_APP_BACKEND_URL}/Notification/remove_firebaseToken`,
      {
        params: {
          userID: userID,
        },
        withCredentials: true,
      }
    );
  
  } catch (err) {
    console.log(err);
  }
};
