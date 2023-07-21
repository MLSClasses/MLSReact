// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyBXnRir_ctl0PtamFbaQ51Q0WleKgEO5yU",
  authDomain: "mlsclasses.firebaseapp.com",
  projectId: "mlsclasses",
  storageBucket: "mlsclasses.appspot.com",
  messagingSenderId: "916013180188",
  appId: "1:916013180188:web:a06da5128c0e502df1c6d9",
  measurementId: "G-VCS563YQD2",
  databaseURL: "https://mlsclasses-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const database = getDatabase(app);
export { app, auth, provider, database };