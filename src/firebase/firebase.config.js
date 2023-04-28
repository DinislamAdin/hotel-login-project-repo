// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA1isNL2EeVkpTc9mVBBcs4p7n5nTPspv4",
    authDomain: "hotel-login-project.firebaseapp.com",
    projectId: "hotel-login-project",
    storageBucket: "hotel-login-project.appspot.com",
    messagingSenderId: "921838435116",
    appId: "1:921838435116:web:f41e1ed9c2b1d03b914a89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;