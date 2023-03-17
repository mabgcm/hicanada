// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDxkc_uznQHRoTI5eObaH4HC56cib8nrfA",
    authDomain: "hicanada-673f1.firebaseapp.com",
    projectId: "hicanada-673f1",
    storageBucket: "hicanada-673f1.appspot.com",
    messagingSenderId: "983004016447",
    appId: "1:983004016447:web:ae49b31547fdd51230ad8a",
    measurementId: "G-ZL75L9668G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);