// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirebaseStore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWXGaMAPUIb4ZzgYx8nXVpm5SUqNP3LnM",
  authDomain: "next-crud-c87d5.firebaseapp.com",
  projectId: "next-crud-c87d5",
  storageBucket: "next-crud-c87d5.appspot.com",
  messagingSenderId: "202286618965",
  appId: "1:202286618965:web:d8d4f0a37c27dd74f4b7dc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirebaseStore();
