import { getFirestore } from 'firebase/firestore';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4ClqIOepBut2aMoDKRjW4hRi5ruCGNgk",
  authDomain: "habit-tracker-c8ed5.firebaseapp.com",
  projectId: "habit-tracker-c8ed5",
  storageBucket: "habit-tracker-c8ed5.firebasestorage.app",
  messagingSenderId: "262444175898",
  appId: "1:262444175898:web:4a597d0849f32c2d1ef7a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db=getFirestore(app);
export default app