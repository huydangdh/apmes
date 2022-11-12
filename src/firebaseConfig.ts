// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
onAuthStateChanged(auth,(user) => {
  if(user) console.log(JSON.stringify(user.toJSON()))
  else console.log("null")
})
export {app, analytics, auth}
