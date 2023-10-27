// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYc_jQiFf8mVI1TcNdg61zy2mfjQ4ME1Q",
  authDomain: "depublic-670fe.firebaseapp.com",
  projectId: "depublic-670fe",
  storageBucket: "depublic-670fe.appspot.com",
  messagingSenderId: "387677574096",
  appId: "1:387677574096:web:de0209f4816a3a4a6edfd5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);