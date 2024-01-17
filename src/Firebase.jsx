// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4KnBSBvwZB-l5cjCEwcPKvvsqqOwQs2o",
  authDomain: "react-firebase-auth-93a03.firebaseapp.com",
  projectId: "react-firebase-auth-93a03",
  storageBucket: "react-firebase-auth-93a03.appspot.com",
  messagingSenderId: "897515493592",
  appId: "1:897515493592:web:0c25ea0d4462c86c755fad"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)