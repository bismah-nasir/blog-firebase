// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Import auth and firestore
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDj_dPa9l3o-L1Yrf6RZEp5ZRfVI0VB3E4",
  authDomain: "blog-app-firebase-1df48.firebaseapp.com",
  projectId: "blog-app-firebase-1df48",
  storageBucket: "blog-app-firebase-1df48.firebasestorage.app",
  messagingSenderId: "796433505513",
  appId: "1:796433505513:web:22513d43a48352bd28a478"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);