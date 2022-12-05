// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyACBii7w70mOtO0pDjBCeh1YK8I2CxE8I0",
    authDomain: "doctors-portal-9fba4.firebaseapp.com",
    projectId: "doctors-portal-9fba4",
    storageBucket: "doctors-portal-9fba4.appspot.com",
    messagingSenderId: "7469698493",
    appId: "1:7469698493:web:877da0ffc899a2b23296d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;