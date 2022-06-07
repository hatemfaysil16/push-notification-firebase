/*
Give the service worker access to Firebase Messaging.
Note that you can only use Firebase Messaging here, other Firebase libraries are not available in the service worker.
*/
importScripts('https://www.gstatic.com/firebasejs/7.23.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.23.0/firebase-messaging.js');

/*
Initialize the Firebase app in the service worker by passing in the messagingSenderId.
* New configuration for app@pulseservice.com
*/
firebase.initializeApp({
    apiKey: "AIzaSyDyonVWLsk4OdhRgM4qmTRHrJubMSkwnfE",
    authDomain: "newtest-3002c.firebaseapp.com",
    projectId: "newtest-3002c",
    storageBucket: "newtest-3002c.appspot.com",
    messagingSenderId: "4907370071",
    appId: "1:4907370071:web:445828d9f9574b1f984512",
    measurementId: "G-ESFZZ921VK"
});

/*
Retrieve an instance of Firebase Messaging so that it can handle background messages.
*/
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload,
  );
  /* Customize notification here */
  const notificationTitle = "Background Message Title";
  const notificationOptions = {
    body: "Background Message body.",
    icon: "/itwonders-web-logo.png",
  };

  return self.registration.showNotification(
    notificationTitle,
    notificationOptions,
  );
});
