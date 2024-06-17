// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  authDomain: "a-website-like-twitter-8c70a.firebaseapp.com",
  projectId: "a-website-like-twitter-8c70a",
  storageBucket: "a-website-like-twitter-8c70a.appspot.com",
  messagingSenderId: "410202651659",
  appId: "1:410202651659:web:0831bf4d361570f14f5b0e",
  measurementId: "G-43CNCQ3KGN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
