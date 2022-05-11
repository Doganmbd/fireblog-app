// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.REACT_APP_FİREBASE_apiKey,
  authDomain:process.env.REACT_APP_FİREBASE_authDomain,
  projectId:process.env.REACT_APP_FİREBASE_projectId,
  storageBucket: process.env.REACT_APP_FİREBASE_storageBucket,
  messagingSenderId:process.env.REACT_APP_FİREBASE_messagingSenderId,
  appId: process.env.REACT_APP_FİREBASE_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);