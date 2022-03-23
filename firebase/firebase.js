// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkRPguzxjODKdVttLtVxagASVziJv08HI",
  authDomain: "contact-e43b4.firebaseapp.com",
  projectId: "contact-e43b4",
  storageBucket: "contact-e43b4.appspot.com",
  messagingSenderId: "50688035324",
  appId: "1:50688035324:web:81437ef898514a9741ca79",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();
