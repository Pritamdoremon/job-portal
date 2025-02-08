// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9MkyBznJqRTZIVGV83g1JM3a7RQkECUE",
  authDomain: "job-portal-9358d.firebaseapp.com",
  projectId: "job-portal-9358d",
  storageBucket: "job-portal-9358d.firebasestorage.app",
  messagingSenderId: "552226862987",
  appId: "1:552226862987:web:1cf777edc41265018be18e",
  measurementId: "G-WJTQK6K5D0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db  =getFirestore(app);
export {db};