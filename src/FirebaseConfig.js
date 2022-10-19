// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBT9Ui3lYaTe42t1Gk2TUSWzxKTK8F9-nE",
  authDomain: "chaty-67612.firebaseapp.com",
  projectId: "chaty-67612",
  storageBucket: "chaty-67612.appspot.com",
  messagingSenderId: "65312516058",
  appId: "1:65312516058:web:ccad3339535baf54d202e3",
  measurementId: "G-9YMBD4W77J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;
