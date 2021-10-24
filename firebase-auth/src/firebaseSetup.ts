import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAQoPIXnoZ4QTGvUwq0z5w0cHY0FIv-uLw",
    authDomain: "fir-auth-tut-9d861.firebaseapp.com",
    projectId: "fir-auth-tut-9d861",
    storageBucket: "fir-auth-tut-9d861.appspot.com",
    messagingSenderId: "29962571501",
    appId: "1:29962571501:web:9593a122e74db0bf1306e4"   
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();