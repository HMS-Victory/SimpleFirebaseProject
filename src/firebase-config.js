import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.SENDINGID,
  appId: process.env.APPID,
  measurementId: process.env.MEASURMENTID
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db=getFirestore(app);