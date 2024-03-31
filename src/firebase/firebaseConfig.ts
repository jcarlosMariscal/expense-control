import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// import dotenv from "dotenv";
// dotenv.config();

const firebaseConfig = {
  apiKey: "AIzaSyBQGlBYfZAMpT1yI6hWh54lj95TXwKEY9k",
  authDomain: "expense-control-d75ef.firebaseapp.com",
  databaseURL: "https://expense-control-d75ef-default-rtdb.firebaseio.com",
  projectId: "expense-control-d75ef",
  storageBucket: "expense-control-d75ef.appspot.com",
  messagingSenderId: "482921676077",
  appId: "1:482921676077:web:f0aaad6b0dd362371767a4",
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
