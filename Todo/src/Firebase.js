import MyFireBase from "firebase/compat/app";
import "firebase/compat/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyD9KPnaZeliSZAzJwXXRZwICVHMlHCIbPE",
    authDomain: "todo-14c70.firebaseapp.com",
    projectId: "todo-14c70",
    storageBucket: "todo-14c70.appspot.com",
    messagingSenderId: "552727429241",
    appId: "1:552727429241:web:796d56faa4b1675a7a14a8",
    measurementId: "G-K7Q702M020"
};


const app = MyFireBase.initializeApp(firebaseConfig);
export const db = MyFireBase.firestore();

