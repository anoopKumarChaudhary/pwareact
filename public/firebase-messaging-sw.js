importScripts(
  "https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyBcKp95EpR4SWVX2FDF0HqpbrtH7S83tLg",
  authDomain: "pwareact-7703b.firebaseapp.com",
  projectId: "pwareact-7703b",
  storageBucket: "pwareact-7703b.firebasestorage.app",
  messagingSenderId: "904731326877",
  appId: "1:904731326877:web:b91dc3ec816f41a2819774",
  measurementId: "G-6RGP6JFP35",
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
    icon: "/logo192.png",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
