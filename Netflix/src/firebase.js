import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA86meY2tVO8kCPntVVBnkxQSdBztkm1HE",
    authDomain: "netflix-281b3.firebaseapp.com",
    projectId: "netflix-281b3",
    storageBucket: "netflix-281b3.appspot.com",
    messagingSenderId: "295684198581",
    appId: "1:295684198581:web:b543d7a9500c7fe0ed6efc",
    measurementId: "G-CLKXE5MJXB"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut };
