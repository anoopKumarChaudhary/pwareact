import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyBcKp95EpR4SWVX2FDF0HqpbrtH7S83tLg",
  authDomain: "pwareact-7703b.firebaseapp.com",
  projectId: "pwareact-7703b",
  storageBucket: "pwareact-7703b.firebasestorage.app",
  messagingSenderId: "904731326877",
  appId: "1:904731326877:web:b91dc3ec816f41a2819774",
  measurementId: "G-6RGP6JFP35",
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export const requestForToken = async () => {
  try {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      const token = await getToken(messaging, {
        vapidKey: "YOUR_VAPID_KEY_HERE", // Replace with your VAPID key
      });
      return token;
    }
  } catch (error) {
    console.error("Error getting notification permission:", error);
  }
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });
