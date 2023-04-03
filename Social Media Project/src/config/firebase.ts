// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRjlt7DlNBd0FMUt4KlLmlcuS9lLa3_eE",
  authDomain: "social-media-p1.firebaseapp.com",
  projectId: "social-media-p1",
  storageBucket: "social-media-p1.appspot.com",
  messagingSenderId: "1032281956285",
  appId: "1:1032281956285:web:4c15d7b705295bbed87cd4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
