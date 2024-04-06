// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBt6FSW4JFi9QTvYx7S7jfaTaYjtqeAXSI",
  authDomain: "dragon-news-6e785.firebaseapp.com",
  projectId: "dragon-news-6e785",
  storageBucket: "dragon-news-6e785.appspot.com",
  messagingSenderId: "371692352747",
  appId: "1:371692352747:web:7b395ffd0c7cd06d0f3aae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const auth=getAuth(app)
 export  default auth