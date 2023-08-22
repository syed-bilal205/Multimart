// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYUcVVKbp_qOd7x6gt58ibRLhq2fiEdZY",
  authDomain: "multimart-80c22.firebaseapp.com",
  projectId: "multimart-80c22",
  storageBucket: "multimart-80c22.appspot.com",
  messagingSenderId: "306598594397",
  appId: "1:306598594397:web:8d4be4ea48a65a7b058ab4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
