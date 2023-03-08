// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeZcn6uaRwifVF_hr9QFCB_RKerrwvvQ4",
  authDomain: "mypropertypal-e74d0.firebaseapp.com",
  projectId: "mypropertypal-e74d0",
  storageBucket: "mypropertypal-e74d0.appspot.com",
  messagingSenderId: "837259615189",
  appId: "1:837259615189:web:3be793d4a6241ea2437b5c",
  measurementId: "G-DS0SH1C4YN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
