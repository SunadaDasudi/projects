import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// Add other Firebase services you need

// Add other Firebase modules you need


const firebaseConfig = {
    apiKey: "AIzaSyAwJ1U8as9NX4-waHAIVwOSm1gJuJJtpSM",
    authDomain: "full-stack-68510.firebaseapp.com",
    projectId: "full-stack-68510",
    storageBucket: "full-stack-68510.appspot.com",
    messagingSenderId: "293714926876",
    appId: "1:293714926876:web:745e2e38a9d8e4ec15aed9"
};

const firebaseApp = initializeApp(firebaseConfig);
// const db = getFirestore();
// const auth = getAuth();

// signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//         // Handle successful sign-in
//     })
//     .catch((error) => {
//         // Handle sign-in error
//     });

// createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//         // User registration successful
//         const user = userCredential.user;
//         console.log('User registered:', user);
//     })
//     .catch((error) => {
//         // User registration failed
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.error('Error registering user:', errorCode, errorMessage);
//     });


// export { db, auth }
export default firebaseConfig