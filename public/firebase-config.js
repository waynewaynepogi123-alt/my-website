import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
 getAuth,
 signInWithEmailAndPassword,
 createUserWithEmailAndPassword,
 onAuthStateChanged,
 signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvidSM1DZ2T4icKYUQFUQT8RtSKkkZJLY",
  authDomain: "ai-command-academy.firebaseapp.com",
  projectId: "ai-command-academy",
  storageBucket: "ai-command-academy.firebasestorage.app",
  messagingSenderId: "104960878490",
  appId: "1:104960878490:web:4db830433d0147e7463c23",
  measurementId: "G-N0HV9WP056"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  doc,
  getDoc,
  setDoc
};