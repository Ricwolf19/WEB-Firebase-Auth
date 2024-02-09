// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVf87QHRxB0xngRbyEEyfURf1tBaosziw",
  authDomain: "test-rc-fb.firebaseapp.com",
  projectId: "test-rc-fb",
  storageBucket: "test-rc-fb.appspot.com",
  messagingSenderId: "131518111028",
  appId: "1:131518111028:web:6cd6be97aa5e824bd05961"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app) //Para usar el fireStore