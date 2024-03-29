import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAwJ1U8as9NX4-waHAIVwOSm1gJuJJtpSM",
    authDomain: "full-stack-68510.firebaseapp.com",
    projectId: "full-stack-68510",
    storageBucket: "full-stack-68510.appspot.com",
    messagingSenderId: "293714926876",
    appId: "1:293714926876:web:745e2e38a9d8e4ec15aed9"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
// const auth = getAuth();


export { db }
export default firebaseConfig