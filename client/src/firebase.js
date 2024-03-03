// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-bccf8.firebaseapp.com",
  projectId: "mern-blog-bccf8",
  storageBucket: "mern-blog-bccf8.appspot.com",
  messagingSenderId: "460973217958",
  appId: "1:460973217958:web:8d75262ae2320f64493c67",
  measurementId: "G-K8E20Z97Z3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);