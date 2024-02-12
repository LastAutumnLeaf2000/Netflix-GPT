// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEW-zp2ZwUCx6KvL3Zg3aTNJ-QQs246ZA",
  authDomain: "netflix-gpt-2024.firebaseapp.com",
  projectId: "netflix-gpt-2024",
  storageBucket: "netflix-gpt-2024.appspot.com",
  messagingSenderId: "49025298250",
  appId: "1:49025298250:web:be5ba6c4749c96073d1bb3",
  measurementId: "G-31WB7SS0H1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
