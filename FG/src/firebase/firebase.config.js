// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxevtKHJP0u4OO0vuBwbHbQmOBLv8J8m8",
  authDomain: "android-app-farmguardian.firebaseapp.com",
  databaseURL: "https://android-app-farmguardian-default-rtdb.firebaseio.com",
  projectId: "android-app-farmguardian",
  storageBucket: "android-app-farmguardian.appspot.com",
  messagingSenderId: "191644480025",
  appId: "1:191644480025:web:ca2611a3769c0944a27088",
  measurementId: "G-0WPZNFCD1B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
