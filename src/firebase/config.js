// Import Firebase services
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import 'firebase/compat/messaging';

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
const firebaseApp = firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// TODO: Descomentar código abaixo após ativar o App Check

// const appCheck = initializeAppCheck(firebaseApp, {
//   provider: new ReCaptchaV3Provider("abcdefghijklmnopqrstuvwxy-1234567890abcd"), // TODO: Colocar a chave do seu reCAPTCHA v3
//   isTokenAutoRefreshEnabled: true,
// });

// Initialize services
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

// Timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp();

// Google Sign In
const googleProvider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, timestamp, googleProvider, messaging };
