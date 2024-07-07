import MyFireBase from "firebase/compat/app";
import "firebase/compat/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyDWFdt_3Cb0pC6mFPfHSRxjUniesjv0wfI",
    authDomain: "contacts-app-cb124.firebaseapp.com",
    projectId: "contacts-app-cb124",
    storageBucket: "contacts-app-cb124.appspot.com",
    messagingSenderId: "583905524672",
    appId: "1:583905524672:web:6f9ed7e853d2513b9ce625",
    measurementId: "G-7GBV968FEY"
};


const app = MyFireBase.initializeApp(firebaseConfig);
export const db = MyFireBase.firestore();

