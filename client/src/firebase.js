// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blogmern-c3693.firebaseapp.com",
  projectId: "blogmern-c3693",
  storageBucket: "blogmern-c3693.appspot.com",
  messagingSenderId: "562755785234",
  appId: "1:562755785234:web:f3aaddb32d57d58ad43ecb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);