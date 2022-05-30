// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyCa6LscNHe3dHJkMjY9s2sXWtrt10Oze4U",
    authDomain: "electronics-warehouse-79cca.firebaseapp.com",
    projectId: "electronics-warehouse-79cca",
    storageBucket: "electronics-warehouse-79cca.appspot.com",
    messagingSenderId: "959024762673",
    appId: "1:959024762673:web:677a70b757d24db2936a10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;