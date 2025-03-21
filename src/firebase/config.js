import { initializeApp } from "firebase/app";
import { initializeFirestore, serverTimestamp } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

// TODO: Colocar o firebaseConfig do seu app aqui abaixo
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnLH-WPXrw6LbXTo6FhHogwjFApEOXIos",
  authDomain: "petzia-f86b4.firebaseapp.com",
  projectId: "petzia-f86b4",
  storageBucket: "petzia-f86b4.firebasestorage.app",
  messagingSenderId: "375896389326",
  appId: "1:375896389326:web:dddf24146bf368fc88029f",
  measurementId: "G-SZJ3S8XPKT"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const messaging = getMessaging(firebaseApp);

// TODO: Descomentar código abaixo após ativar o App Check

// const appCheck = initializeAppCheck(firebaseApp, {
//   provider: new ReCaptchaV3Provider("abcdefghijklmnopqrstuvwxy-1234567890abcd"), // TODO: Colocar a chave do seu reCAPTCHA v3
//   isTokenAutoRefreshEnabled: true,
// });

// Initialize services
const db = initializeFirestore(firebaseApp, {
  ignoreUndefinedProperties: true,
});
const auth = getAuth(firebaseApp);
const storage = getStorage(firebaseApp);

// Timestamp
const timestamp = serverTimestamp();

// Google Sign In
const googleProvider = new GoogleAuthProvider();

export { db, auth, storage, timestamp, googleProvider, messaging };
