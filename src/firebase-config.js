import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore';

// I left in the API key because of some errors with dotenv
// because of the react update to 5.0
const firebaseConfig = {
  apiKey: "AIzaSyBySDycyOUbqX9y9q5o13XWBDh7qJs4_Tg",
  authDomain: "fir-tutorial-64216.firebaseapp.com", 
  projectId: "fir-tutorial-64216",
  storageBucket: "fir-tutorial-64216.appspot.com",
  messagingSenderId: "640565087258",
  appId: "1:640565087258:web:3d58750f05b4c4668c15a3",
  measurementId: "G-8KG1NM1XFR"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db=getFirestore(app);