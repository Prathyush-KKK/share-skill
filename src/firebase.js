import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: "shareskill-866a0",
    storageBucket: "shareskill-866a0.appspot.com",
    messagingSenderId: "767154175076",
    appId: "1:767154175076:web:216f9a2bb7dd7240ad7371"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;