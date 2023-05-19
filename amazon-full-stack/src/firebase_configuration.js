// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAwJ1U8as9NX4-waHAIVwOSm1gJuJJtpSM",
    authDomain: "full-stack-68510.firebaseapp.com",
    projectId: "full-stack-68510",
    storageBucket: "full-stack-68510.appspot.com",
    messagingSenderId: "293714926876",
    appId: "1:293714926876:web:745e2e38a9d8e4ec15aed9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore
export const db = getFirestore(app);

