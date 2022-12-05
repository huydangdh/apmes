import { initializeApp } from "firebase/app"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYSv1dJvkTf9gObj-Q1AJviffI7x1Kh6A",
  authDomain: "huyimgdrive-1604305669778.firebaseapp.com",
  projectId: "huyimgdrive-1604305669778",
  storageBucket: "huyimgdrive-1604305669778.appspot.com",
  messagingSenderId: "700319487511",
  appId: "1:700319487511:web:26f9ae0ac1e33461026e52",
  measurementId: "G-2H1PGYNZWE"
};

const firebaseapp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth();

export {firebaseapp, firebaseAuth}