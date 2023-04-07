// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAa6KlHemCnkzQmrQvjI59f8oTP35UO7ck",
  authDomain: "t094vv4-diary.firebaseapp.com",
  projectId: "t094vv4-diary",
  storageBucket: "t094vv4-diary.appspot.com",
  messagingSenderId: "92589711638",
  appId: "1:92589711638:web:4a2fdc9deafffbe4da7037",
  measurementId: "G-BNM4P6NX56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// ブラウザのみで動作させる
if (typeof window !== 'undefined') {
  const analytics = getAnalytics(app);
}

export const db = getFirestore();
