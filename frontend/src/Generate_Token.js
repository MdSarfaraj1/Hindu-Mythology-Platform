// the file is used to generate firebase token f

import { messaging } from "./firebase";
import { getToken } from "firebase/messaging";
import axios from "axios";
export const request_Notification_Permission = async (userID) => {
  // const permission = await Notification.requestPermission();
  // if (permission === "granted") {
  //generate token
  const token = await getToken(messaging, {
    vapidKey:
      "BNW4_8OW2-eYbS2K3so3yC9doxmvVX6kDqf2Hj5UvmYZcO1o-u46mAGfkVQWLEf0O5ZEvL7hRVh_5DkOS1tYdKs",
  });
  try {
    const response =await  axios.post(
      `${import.meta.env.VITE_APP_BACKEND_URL}/Notification/save_firebaseToken`,
      { token, userID },
      { withCredentials: true }
    );
  } catch (err) {
    if (err.response.status === 401) {
      console.log("User not authenticated:", err.response.data.message);
      alert(err.response.data.message);
      window.location.href = "/login";
    } else {
      console.log("Other error occurred:", err.response.data.message);
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
