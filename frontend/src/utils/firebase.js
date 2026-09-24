// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5VX8k5N1HgrRMQHnGLih_6hxoXcMAjZI",
  authDomain: "netflix-gpt-8315d.firebaseapp.com",
  projectId: "netflix-gpt-8315d",
  storageBucket: "netflix-gpt-8315d.firebasestorage.app",
  messagingSenderId: "848122391935",
  appId: "1:848122391935:web:895f1bf83ec9d5075f7e4a",
  measurementId: "G-0T7L3VX7FB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()