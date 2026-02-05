// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBb7YmCDv8Sc_8ZIfy9CrKqA_ewRaLUKys",
  authDomain: "product-e0f3e.firebaseapp.com",
  projectId: "product-e0f3e",
  storageBucket: "product-e0f3e.firebasestorage.app",
  messagingSenderId: "1034729296554",
  appId: "1:1034729296554:web:e87038d6b49a824b8e36d3",
  measurementId: "G-6SQLPEYG14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
