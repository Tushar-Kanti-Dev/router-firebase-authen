// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0JQT0kAYVdQZbWT5mKeWnVui0o8M9zTI",
  authDomain: "router-firebase-authen.firebaseapp.com",
  projectId: "router-firebase-authen",
  storageBucket: "router-firebase-authen.appspot.com",
  messagingSenderId: "25850516480",
  appId: "1:25850516480:web:d32f2394056a78d093f4e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;