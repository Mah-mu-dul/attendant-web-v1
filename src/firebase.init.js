// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB_YwfFMx5Osk4pn8WydtgUKUL0RkBTT4Y",
    authDomain: "attendantv3.firebaseapp.com",
    projectId: "attendantv3",
    storageBucket: "attendantv3.appspot.com",
    messagingSenderId: "738770154612",
    appId: "1:738770154612:web:e52562d3b3ad32835fcd21",
    measurementId: "G-GFGW3C06JD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);