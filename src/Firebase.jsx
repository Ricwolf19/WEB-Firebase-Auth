// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_RBtSfsN9HyNbgmCdyRe2KAlV1kNkHas",
  authDomain: "rc-fb-auth.firebaseapp.com",
  projectId: "rc-fb-auth",
  storageBucket: "rc-fb-auth.appspot.com",
  messagingSenderId: "356564175828",
  appId: "1:356564175828:web:b454815f4b816233546441"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app) //Para usar el fireStore