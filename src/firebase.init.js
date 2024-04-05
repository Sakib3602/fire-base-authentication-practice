// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXPau28S6tLurtv46SzXRzEq3han7YE-w",
  authDomain: "tourhub-eecdf.firebaseapp.com",
  projectId: "tourhub-eecdf",
  storageBucket: "tourhub-eecdf.appspot.com",
  messagingSenderId: "621585411211",
  appId: "1:621585411211:web:23250aeeee2f1ee658388e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);